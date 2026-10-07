import { IoIosArrowBack } from "react-icons/io";

function BackButton({ lastImage, className }) {
  function handleArrowLeft(event) {
    if (event.key === "ArrowLeft") {
      lastImage();
    }
  }
  return (
    <>
      <button
        className={className}
        onClick={lastImage}
        onKeyDown={handleArrowLeft}
      >
        <IoIosArrowBack className="image-navigation-icon" />
      </button>
    </>
  );
}

export default BackButton;
