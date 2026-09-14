function Cart({ cart, removeFromCart, total }) {
  return (
    <div className="cart-section">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-product">
                <img src={item.image} alt={item.name} />
                   <span>
                     {item.name} - ${item.price}
                    </span>
               </div>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h3 className="cart-total">
            Total: ${total.toFixed(2)}
          </h3>
        </>
      )}
    </div>
  )
}

export default Cart