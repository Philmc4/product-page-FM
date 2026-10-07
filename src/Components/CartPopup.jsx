import { FaRegTrashCan } from "react-icons/fa6";

function CartPopup({ cart, removeProduct }) {
  return (
    <div className="basket-popup">
      <div className="cart-popup-title">
        <p className="text-3-bold text-my-grey-950 pl-3">Cart</p>
      </div>
      {/* <div className="cart-contents"> */}
      {cart.length > 0 ? (
        <div className="cart-item-container">
          {cart.map((item, index) => (
            <div className="cart-items" key={index}>
              <img
                src={item.mainImage}
                alt={`Thumbnail image for ${item.name}`}
                className="cart-product-image"
              />
              <div className="cart-item-content">
                <p className="text-4 text-my-grey-500">{item.name}</p>
                <div className="cart-item-quantity">
                  <p className="text-4 text-my-grey-500">
                    ${Number((item.price * item.discount) / 100).toFixed(2)} x{" "}
                    {item.quantity}
                  </p>
                  <p className="text-3-bold text-my-grey-950">
                    $
                    {Number(
                      Number((item.price * item.discount) / 100) *
                        item.quantity,
                    ).toFixed(2)}
                  </p>
                </div>
              </div>
              <FaRegTrashCan
                className="size-4 cursor-pointer text-my-grey-300"
                onClick={() => removeProduct(item)}
              />
            </div>
          ))}
          <button className="checkout-button text-3-bold text-my-grey-950">
            Checkout
          </button>
        </div>
      ) : (
        <div className="cart-contents">
          <p className="text-3-bold text-my-grey-500">Your cart is empty</p>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}

export default CartPopup;

// (
//           <div className="cart-items">
//             <p className="text-3-bold text-my-grey-500">{cart[0].name}</p>
//           </div>
//         )
