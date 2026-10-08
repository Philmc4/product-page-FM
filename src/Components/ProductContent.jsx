import AddToCart from "./AddToCart";

function ProductContent({
  increaseQuantity,
  decreaseQuantity,
  addToCart,
  product,
  setProduct,
  productQuantity,
}) {
  return (
    <div className="main-product-content">
      <div className="product-title">
        <p className="text-5">sneaker company</p>
        <h1 className="text-1">{product.name}</h1>
      </div>
      <p className="text-3-regular">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-main-container">
        <div className="price-totals">
          <p className="text-2">
            $
            {Number((product.price * (100 - product.discount)) / 100).toFixed(
              2,
            )}
          </p>
          <p className="text-3-bold original-price">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <p className="text-3-bold discount-percentage">{product.discount}%</p>
      </div>
      <div className="mobile-price-main-container">
        <div className="price-totals">
          <p className="text-2">
            $
            {Number((product.price * (100 - product.discount)) / 100).toFixed(
              2,
            )}
          </p>
          <p className="text-3-bold discount-percentage">{product.discount}%</p>
        </div>
        <p className="text-3-bold original-price">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <AddToCart
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        addToCart={addToCart}
        product={product}
        setProduct={setProduct}
        productQuantity={productQuantity}
      />
    </div>
  );
}

export default ProductContent;
