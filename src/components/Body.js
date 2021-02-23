import React from "react";
import classes from "./Body.module.css";
import { HiMail as EmailIcon } from "react-icons/hi";
import { AiFillLinkedin as LinkedinIcon } from "react-icons/ai";
import { FaPhone as PhoneIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
const Body = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.titulo}>Bellanich Nicolas Darío</h1>
        <h2 className={classes.subtitulo}> Software Engineer</h2>
      </div>
      <div>
        <h3 className={classes.tituloSeccion}>Contact and networks</h3>
        <p>
          <EmailIcon className={classes.icons} /> nicolasbellanich@gmail.com
        </p>
        <p>
          <PhoneIcon className={classes.icons} />
          +54 351-2080462
        </p>
        <p>
          <LinkedinIcon className={classes.icons} />{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nicolasdariobellanich70491/"
          >
            My profile
          </a>
        </p>
        <p>
          <GithubIcon className={classes.icons} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https:/github.com/NicoBellanich"
          >
            My git
          </a>
        </p>
      </div>
      <div>
        <h3 className={classes.tituloSeccion}>Job experience</h3>
        <Accordion>
            <AccordionSummary><p>» Full stack developer</p></AccordionSummary>
            <AccordionDetails><p>first</p></AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary><p>2</p></AccordionSummary>
            <AccordionDetails><p>second</p></AccordionDetails>
        </Accordion>
      </div>
      <div>
        <h3 className={classes.tituloSeccion}>Education & courses</h3>
      </div>
    </div>
  );
};

export { Body };
