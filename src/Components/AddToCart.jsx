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
          onClick={() => decreaseQuantity(quantity)}
          className="product-minus"
        >
          <FaMinus className="cart-quantity-icon" />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          className="text-3-bold quantity-input"
          name="product-quantity"
          id=""
        ></input>
        <button
          onClick={() => increaseQuantity(quantity)}
          className="product-plus"
        >
          <FaPlus className="cart-quantity-icon" />
        </button>
      </div>
      <button
        className="add-to-cart-main-button"
        onClick={() => addToCart(product, quantity)}
      >
        <BsCart3 className="cart-button-icon" />
        <p className="text-3-bold text-my-grey-950">Add to cart</p>
      </button>
    </div>
  );
}

export default AddToCart;
