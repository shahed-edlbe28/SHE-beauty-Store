import { useState } from "react"
import ProductList from "../components/ProductList"

function Products({ products, setCart }) {
  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <ProductList
        products={filteredProducts}
        setCart={setCart}
      />
    </div>
  )
}

export default Products