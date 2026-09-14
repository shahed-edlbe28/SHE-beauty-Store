function ProductCard({ name, price, image,setCart }) {

  function addToCart() {
  setCart((currentCart) => [
    ...currentCart,
    { name, price, image }
  ])
}

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard