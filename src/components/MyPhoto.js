import React from "react";
import image from "../Img/MiFoto.jpg";

const MyPhoto = () => {
  return (
    <img
      style={{ width: "13vw", height: "36vh", zIndex: "4", borderRadius:"10%" }}
      src={image}
    ></img>
  );
};

export { MyPhoto };
