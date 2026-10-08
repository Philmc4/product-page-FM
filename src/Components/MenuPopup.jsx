import { IoClose } from "react-icons/io5";

function MenuPopup({ setMenuPopup }) {
  return (
    <div className="menu-popup-main-container">
      <div className="popup-menu-main-container">
        <button
          type="button"
          aria-label="Close the popup menu"
          onClick={() => setMenuPopup(false)}
        >
          <IoClose className="menu-popup-close-icon" />
        </button>
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
    </div>
  );
}

export default MenuPopup;
