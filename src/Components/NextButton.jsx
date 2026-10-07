import { IoIosArrowForward } from "react-icons/io";

function NextButton({ nextImage, className }) {
  function handleArrowRight(event) {
    if (event.key === "ArrowRight") {
      nextImage();
    }
  }

  return (
    <>
      <button
        className={className}
        onClick={nextImage}
        onKeyDown={handleArrowRight}
      >
        <IoIosArrowForward className="image-navigation-icon" />
      </button>
    </>
  );
}

export default NextButton;
