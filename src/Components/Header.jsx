import { BsCart3 } from "react-icons/bs";
import CartPopup from "./CartPopup";
import { MdMenu } from "react-icons/md";

import LogoImage from "/images/logo.svg";
import AvatarImage from "/images/image-avatar.png";

function Header({
  cartPopup,
  cartPopupToggle,
  setMenuPopup,
  cart,
  removeProduct,
}) {
  return (
    <>
      <header className="header-main-container">
        <div className="header-logo-container">
          <img
            src={LogoImage}
            alt="Logo image for Sneakers.com"
            className="logo-image"
          />
          <nav>
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-basket-container">
          <button
            type="button"
            aria-label="Open and close the cart popup"
            onClick={cartPopupToggle}
          >
            <BsCart3 className="cart-icon" />
          </button>
          <img src={AvatarImage} alt="" className="avatar-image" />
        </div>
        {cartPopup && <CartPopup cart={cart} removeProduct={removeProduct} />}
      </header>
      <div className="smaller-screen-header-main-container">
        <div className="header-logo-container">
          <button
            type="button"
            aria-label="Open the mobile menu"
            onClick={() => setMenuPopup(true)}
          >
            <MdMenu className="menu-popup-icon" />
          </button>

          <img
            src={LogoImage}
            alt="Logo image for Sneakers.com"
            className="logo-image"
          />
        </div>
        <div className="header-basket-container">
          <button
            type="button"
            aria-label="Open and close the cart popup"
            onClick={cartPopupToggle}
          >
            <BsCart3 className="cart-icon" />
          </button>

          <img src={AvatarImage} alt="avatar image" className="avatar-image" />
        </div>
        {cartPopup && <CartPopup cart={cart} removeProduct={removeProduct} />}
      </div>
    </>
  );
}

export default Header;
