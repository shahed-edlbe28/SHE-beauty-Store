import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <h1>Welcome to SHE Beauty</h1>

      <p>
        Discover beauty products made to help you feel confident and beautiful.
      </p>

      <Link to="/products" className="shop-button">
        Shop Now
      </Link>
    </div>
  )
}

export default Home