import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Arrow from "../../assets/Images/prepage/arrow.svg";
import FullFace from "../../assets/Images/prepage/full-face.png";
import PreSaleBody from "../../assets/Images/prepage/presale-body.png";
import Cat from "../../assets/Images/prepage/cat.png";
import Building from "../../assets/Images/prepage/building.png";

const Landing = () => {
  const navigate = useNavigate();
  const [zoomIn, setZoomIn] = useState("");
  const condoZoomHandler = () => {
    setZoomIn("zoom-in");
    setTimeout(() => {
      navigate("/home");
    }, 400);
  };

  return (
    <div className="prePage">
      <div className="container main-info d-flex">
        <div className="click-me-main-text">
          <p className="click-me-text silkscreen-bold">Click Me</p>
          <img src={Arrow} alt="arrow" className="arrow-img ms-5" />
        </div>
        <div
          className={`ondo-person ${zoomIn}`}
          id="ondo-person"
          onClick={condoZoomHandler}
        >
          <button className="click-navigate" id="click-navigate">
            <img src={FullFace} alt="" className="click-to-go" />
            <img src={PreSaleBody} alt="" className="body-person" />
          </button>
          <img
            src={Cat}
            alt=""
            id="click-cat"
            className="bg-img2-pretoken bg-sub-img-abs"
          />
        </div>
      </div>
      <div className="bg-building">
        <img
          src={Building}
          alt="building"
          className="mini-img-3 mini-imgs-bg"
        />
      </div>
    </div>
  );
};

export default Landing;
