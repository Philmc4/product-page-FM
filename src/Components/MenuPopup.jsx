import { IoClose } from "react-icons/io5";

function MenuPopup({ setMenuPopup }) {
  return (
    <header className="menu-popup-main-container">
      <div className="popup-menu-main-container">
        <button
          type="button"
          aria-label="Close the popup menu"
          onClick={() => setMenuPopup(false)}
        >
          <IoClose className="menu-popup-close-icon" />
        </button>
        <nav>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MenuPopup;
