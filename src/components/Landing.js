import React from "react";
import classes from "./Landing.module.css";
import { Draws } from "./Draws";
import { SideBar } from "./SideBar";
import { Body } from "./Body";
import { Footer } from "./Footer";

const Landing = () => {
  return (
    <>
      <Draws />
      <div className={classes.generalContainer}>
        <SideBar />
        <Body />
      </div>
      <Footer />
    </>
  );
};

export { Landing };
