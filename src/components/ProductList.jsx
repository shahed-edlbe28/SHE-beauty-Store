import ProductCard from "./ProductCard"

function ProductList({ products, setCart}) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          setCart={setCart}
        />
      ))}
    </div>
  )
}

export default ProductList