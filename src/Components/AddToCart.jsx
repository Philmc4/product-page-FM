import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

function AddToCart({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
  addToCart,
  product,
}) {
  return (
    <div className="add-to-cart-main-container">
      <div className="quantity-container">
        <button
          type="button"
          aria-label="Decrease the quantity"
          onClick={() => decreaseQuantity(quantity)}
          className="product-minus"
        >
          <FaMinus className="cart-quantity-icon" />
        </button>
        <input
          aria-label="Quantity of product to add to cart"
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
          className="text-3-bold quantity-input"
          name="product-quantity"
          id="product-quantity"
        ></input>
        <button
          type="button"
          aria-label="Increase the quantity"
          onClick={() => increaseQuantity(quantity)}
          className="product-plus"
        >
          <FaPlus className="cart-quantity-icon" />
        </button>
      </div>
      <button
        type="button"
        aria-label="Add the item to cart"
        className="add-to-cart-main-button"
        onClick={() => addToCart(product)}
      >
        <BsCart3 className="cart-button-icon" />
        <p className="text-3-bold text-my-grey-950">Add to cart</p>
      </button>
    </div>
  );
}

export default AddToCart;
