import { IoIosArrowForward } from "react-icons/io";

function NextButton({ nextImage, className }) {
  return (
    <>
      <button
        type="button"
        aria-label="Button to move to the next image"
        className={className}
        onClick={nextImage}
      >
        <IoIosArrowForward className="image-navigation-icon" />
      </button>
    </>
  );
}

export default NextButton;
