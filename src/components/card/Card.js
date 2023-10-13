import React from "react";
import "/src/styles/Card.scss";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import image1 from "/src/assets/images/cat1.jpg";
import { useState } from "react";

const Card = () => {
  const [isFlipped, setFlipped] = useState(false);
  const handleFlip = () => setFlipped((prevState) => !prevState);
  const header = "Cat";
  return (
    <div className={`card${isFlipped ? " flipped" : ""}`}>
      <div className="card-inner">
        <div className="card-front">
          <h3>
            {header}
          </h3>
          <img src={image1} />
          <div className="card-button">
            <button onClick={handleFlip}>
              <MdOutlineFlipCameraAndroid />
            </button>
            <button>
              <AiOutlineZoomIn />
            </button>
          </div>
        </div>
        <div className="card-back">
          <button onClick={handleFlip}>
            <MdOutlineFlipCameraAndroid />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
