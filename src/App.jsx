import "./index.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductContent from "./components/ProductContent";
import ImageGallery from "./components/ImageGallery";
import LightBox from "./components/LightBox";

import Image1 from "/images/image-product-1.jpg";
import Image2 from "/images/image-product-2.jpg";
import Image3 from "/images/image-product-3.jpg";
import Image4 from "/images/image-product-4.jpg";
import ThumbnailImage1 from "/images/image-product-1-thumbnail.jpg";
import ThumbnailImage2 from "/images/image-product-2-thumbnail.jpg";
import ThumbnailImage3 from "/images/image-product-3-thumbnail.jpg";
import ThumbnailImage4 from "/images/image-product-4-thumbnail.jpg";
import MenuPopup from "./components/MenuPopup";

function App() {
  const productImages = [
    { source: Image1, index: 0, thumbnail: ThumbnailImage1 },
    { source: Image2, index: 1, thumbnail: ThumbnailImage2 },
    { source: Image3, index: 2, thumbnail: ThumbnailImage3 },
    { source: Image4, index: 3, thumbnail: ThumbnailImage4 },
  ];
  // const [quantity, setQuantity] = useState(0);
  const [cartPopup, setCartPopup] = useState(false);
  const [lightboxModal, setLightboxModal] = useState(false);
  const [menuPopup, setMenuPopup] = useState(false);
  const [focusImage, setFocusImage] = useState(0);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({
    name: "Fall Limited Edition Sneakers",
    price: 250.0,
    discount: 50,
    quantity: 1,
    mainImage: ThumbnailImage1,
  });

  const addToCart = (item) => {
    if (product.quantity === 0) return;
    if (product.quantity > 0) setCart([...cart, item]);
  };

  const removeProduct = (itemToRemove) => {
    setCart(cart.filter((items) => items !== itemToRemove));
  };

  const productQuantity = (number) => {
    setProduct({ ...product, quantity: number + 1 });
  };

  const increaseQuantity = (number) => {
    if (number < 10) {
      setProduct({ ...product, quantity: number + 1 });
    }
  };
  const decreaseQuantity = (number) => {
    if (number > 0) {
      setProduct({ ...product, quantity: number - 1 });
    }
  };

  function cartPopupOpen() {
    if (cartPopup === true) {
      setCartPopup(false);
    } else if (cartPopup === false) {
      setCartPopup(true);
    }
  }
  function lightboxModalOpen() {
    if (lightboxModal === true) {
      setLightboxModal(false);
    } else if (lightboxModal === false) {
      setLightboxModal(true);
    }
  }
  function nextImage() {
    if (focusImage === 3) {
      setFocusImage(0);
    } else {
      setFocusImage(focusImage + 1);
    }
  }
  function lastImage() {
    if (focusImage === 0) {
      setFocusImage(3);
    } else {
      setFocusImage(focusImage - 1);
    }
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") lastImage();
      if (e.key === "Escape" && lightboxModal) setLightboxModal(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <>
      {lightboxModal && (
        <LightBox
          lightboxModalOpen={lightboxModalOpen}
          productImages={productImages}
          focusImage={focusImage}
          setFocusImage={setFocusImage}
          nextImage={nextImage}
          lastImage={lastImage}
        />
      )}
      {menuPopup && <MenuPopup setMenuPopup={setMenuPopup} />}

      <Header
        cart={cart}
        cartPopup={cartPopup}
        cartPopupToggle={cartPopupOpen}
        setMenuPopup={setMenuPopup}
        removeProduct={removeProduct}
      />

      <main>
        <ImageGallery
          lightboxModalOpen={lightboxModalOpen}
          productImages={productImages}
          focusImage={focusImage}
          setFocusImage={setFocusImage}
          nextImage={nextImage}
          lastImage={lastImage}
        />
        <ProductContent
          product={product}
          setProduct={setProduct}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          addToCart={addToCart}
          productQuantity={productQuantity}
        />
      </main>
    </>
  );
}

export default App;
