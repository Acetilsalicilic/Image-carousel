import { act } from "react";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

interface Props {
  orientation: string;
  action: (direction: boolean) => void;
}

const Arrow = function ({ orientation, action }: Props) {
  const source = "left" === orientation ? arrowLeft : arrowRight;

  // Function to implement action
  const onClick = () => {
    const side = "left" === orientation ? true : false;
    action(side);
  };
  return (
    <>
      <div className="inline-element">
        <button type="button" onClick={onClick}>
          <img src={source} alt={orientation} className="side-button" />
        </button>
      </div>
    </>
  );
};

export default Arrow;
