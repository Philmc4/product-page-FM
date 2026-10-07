import { BsCart3 } from "react-icons/bs";
import CartPopup from "./CartPopup";
import { MdMenu } from "react-icons/md";

function Header({
  cartPopup,
  cartPopupToggle,
  setMenuPopup,
  cart,
  removeProduct,
}) {
  return (
    <>
      <div className="header-main-container">
        <div className="header-logo-container">
          <img
            src="/images/logo.svg"
            alt="Logo image for Sneakers.com"
            className="logo-image"
          />
          <header>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </header>
        </div>
        <div className="header-basket-container">
          <BsCart3 className="cart-icon" onClick={cartPopupToggle} />
          <img src="/images/image-avatar.png" alt="" className="avatar-image" />
        </div>
        {cartPopup && <CartPopup cart={cart} removeProduct={removeProduct} />}
      </div>
      <div className="smaller-screen-header-main-container">
        <div className="header-logo-container">
          <MdMenu
            className="menu-popup-icon"
            onClick={() => setMenuPopup(true)}
          />
          <img
            src="/images/logo.svg"
            alt="Logo image for Sneakers.com"
            className="logo-image"
          />
        </div>
        <div className="header-basket-container">
          <BsCart3 className="cart-icon" onClick={cartPopupToggle} />
          <img src="/images/image-avatar.png" alt="" className="avatar-image" />
        </div>
        {cartPopup && <CartPopup cart={cart} removeProduct={removeProduct} />}
      </div>
    </>
  );
}

export default Header;
