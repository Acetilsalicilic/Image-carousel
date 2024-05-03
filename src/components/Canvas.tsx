interface Props {
  imageSource: string;
}

const Canvas = function name({ imageSource }: Props) {
  //console.log(`Image being used: ${imageSource}`);
  return (
    <>
      <div className="image-container">
        <img
          src={imageSource}
          alt="Some image from pexels"
          className="image inline-element"
        />
      </div>
    </>
  );
};

export default Canvas;
