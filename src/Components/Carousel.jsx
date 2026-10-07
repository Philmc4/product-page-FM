function Carousel({ productImages, focusImage, setFocusImage, className }) {
  return (
    <div className={className}>
      {productImages.map((image, index) => (
        <div
          key={index}
          className={`thumbnail-image-container ${image.index === focusImage ? "thumbnail-image-container-active" : ""}`}
        >
          <img
            src={image.thumbnail}
            alt="thumbnail slider image"
            className={`carousel-image ${image.index === focusImage ? "active-thumbnail-image" : ""}`}
            onClick={() => setFocusImage(image.index)}
          />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
