import { useState } from "react"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"
import "./App.css"
import lipstickImg from "./assets/pexels-karola-g-4938509.jpg"
import foundationImg from "./assets/pexels-amazingsobia-5403543.jpg"
import blushImg from "./assets/pexels-kpaukshtite-2417855.jpg"
import highlighterImg from "./assets/pexels-alena-chuyankova-280716561-18978369.jpg"
import mascaraImg from "./assets/pexels-karola-g-4938457.jpg"
import lipGlossImg from "./assets/pexels-lilli-anette-1284698-10037325.jpg"
import concealerImg from "./assets/pexels-roshan-zameer-325933883-13964073.jpg"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

function App() {
  const [cart, setCart] = useState([])
  const [search, setSearch] = useState("")

  const storeName = "SHE Beauty"

  const products = [
  {
    id: 1,
    name: "Matte Lipstick",
    price: 12.99,
    image: lipstickImg,
  },
  {
    id: 2,
    name: "Liquid Foundation",
    price: 19.99,
    image: foundationImg,
  },
  {
    id: 3,
    name: "Blush",
    price: 9.99,
    image: blushImg,
  },
  {
  id: 4,
  name: "Volume Mascara",
  price: 14.99,
  image: mascaraImg,
   },
 {
  id: 5,
  name: "Highlighter",
  price: 16.99,
  image: highlighterImg,
   },
  {
  id: 6,
  name: "Lip Gloss",
  price: 11.99,
  image: lipGlossImg,
  },
 {
  id: 7,
  name: "Concealer",
  price: 15.99,
  image: concealerImg,
  },
 ]

  function removeFromCart(indexToRemove) {
    setCart((currentCart) =>
      currentCart.filter((item, index) => index !== indexToRemove)
    )
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

 return (
  <BrowserRouter basename="/SHE-beauty-Store">
    <Navbar storeName={storeName} cart={cart} />

    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/products"
        element={
          <Products
            products={filteredProducts}
            setCart={setCart}
          />
        }
      />

      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            total={total}
          />
        }
      />
    </Routes>
  </BrowserRouter>
)
}

export default App