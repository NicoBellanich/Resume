import React from "react";
import classes from "./SideBar.module.css";
import { MyPhoto } from "./MyPhoto";
import { about_me } from "../texts/English/Landing";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.imageContainer}>
        <MyPhoto />
      </div>
      <div className={classes.text}>
        <p>{about_me}</p>
      </div>
    </div>
  );
};

export { SideBar };
