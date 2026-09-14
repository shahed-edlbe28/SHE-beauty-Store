import { Link } from "react-router-dom"

function Navbar({ storeName, cart }) {
  return (
    <nav className="navbar">
      <h2 className="logo">{storeName}</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  )
}

export default Navbar