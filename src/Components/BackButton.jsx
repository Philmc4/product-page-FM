import { IoIosArrowBack } from "react-icons/io";

function BackButton({ lastImage, className }) {
  return (
    <>
      <button
        type="button"
        aria-label="Button to go back an image"
        className={className}
        onClick={lastImage}
      >
        <IoIosArrowBack className="image-navigation-icon" />
      </button>
    </>
  );
}

export default BackButton;
