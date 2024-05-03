import { useState } from "react";
import imageSource from "../assets/imageSource";
import Arrow from "./Arrow";
import Canvas from "./Canvas";

const Container = function () {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the image being shown
  const updateImage = (direction: boolean) => {
    if (direction) {
      0 < currentImageIndex
        ? setCurrentImageIndex(currentImageIndex - 1)
        : console.warn("Can't turn to left anymore!");
    } else {
      imageSource.length - 1 > currentImageIndex
        ? setCurrentImageIndex(currentImageIndex + 1)
        : console.warn("Can't turn to right anymore!");
    }
  };

  return (
    <>
      <Arrow orientation="left" action={updateImage} />
      <Canvas imageSource={imageSource[currentImageIndex]} />
      <Arrow orientation="right" action={updateImage} />
    </>
  );
};

export default Container;
