import React from "react";
import image from "../Img/MiFoto.jpg";
import classes from "./MyPhoto.module.css"
const MyPhoto = () => {
  return (
    <img
      className={classes.image}
      src={image}
    ></img>
  );
};

export { MyPhoto };
