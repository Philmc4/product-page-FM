import { IoClose } from "react-icons/io5";
import LightboxImageGallery from "./LightboxImageGallery";
import Carousel from "./Carousel";

function LightBox({
  lightboxModalOpen,
  productImages,
  focusImage,
  setFocusImage,
  nextImage,
  lastImage,
}) {
  return (
    <div className="lightbox-main-container">
      <div className="lightbox-content">
        <div className="lightbox-icon-container">
          <button
            type="button"
            aria-label="Close the image gallery"
            onClick={lightboxModalOpen}
          >
            <IoClose className="lightbox-close-icon" />
          </button>
        </div>
        <LightboxImageGallery
          productImages={productImages}
          focusImage={focusImage}
          nextImage={nextImage}
          lastImage={lastImage}
        />
        <Carousel
          className={"lightbox-image-carousel"}
          productImages={productImages}
          focusImage={focusImage}
          setFocusImage={setFocusImage}
        />
      </div>
    </div>
  );
}

export default LightBox;
