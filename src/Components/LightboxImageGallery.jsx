import BackButton from "./BackButton";
import NextButton from "./NextButton";

function LightboxImageGallery({
  productImages,
  focusImage,
  nextImage,
  lastImage,
}) {
  return (
    <div className="lightbox-main-image-container">
      <div className="lightbox-navigation-container">
        <BackButton
          lastImage={lastImage}
          className={"lightbox-last-image-button"}
        />
        <NextButton
          nextImage={nextImage}
          className={"lightbox-next-image-button"}
        />
      </div>
      <img
        src={productImages[focusImage].source}
        alt="Main product image"
        className="lightbox-main-product-image"
      />
    </div>
  );
}

export default LightboxImageGallery;
