import BackButton from "./BackButton";
import NextButton from "./NextButton";
import Carousel from "./Carousel";

function ImageGallery({
  lightboxModalOpen,
  productImages,
  focusImage,
  setFocusImage,
  nextImage,
  lastImage,
}) {
  return (
    <div className="main-image-gallery">
      <BackButton lastImage={lastImage} className={"last-image-button"} />
      <NextButton nextImage={nextImage} className={"next-image-button"} />
      <img
        src={productImages[focusImage].source}
        alt="Main product image"
        className="main-product-image"
        onClick={lightboxModalOpen}
      />
      <Carousel
        className={"image-carousel"}
        productImages={productImages}
        focusImage={focusImage}
        setFocusImage={setFocusImage}
      />
    </div>
  );
}

export default ImageGallery;
