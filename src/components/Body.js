import React, { useEffect } from "react";
import classes from "./Body.module.css";
import { HiMail as EmailIcon, HiChat as ChatIcon } from "react-icons/hi";
import { AiFillLinkedin as LinkedinIcon } from "react-icons/ai";
import { FaPhone as PhoneIcon, FaUniversity as UniversityIcon } from "react-icons/fa";
import {
  FaGithub as GithubIcon,
  FaRegCalendarAlt as CalendarIcon,
  FaBuilding as BuildingIcon,
} from "react-icons/fa";
import { IoBookSharp as BooksIcons} from "react-icons/io5"
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
const Body = () => {

  useEffect(()=>{
    console.log("WW",window.innerWidth)
  },[])

  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.titulo}>Bellanich Nicolas</h1>
        <h2 className={classes.subtitulo}> Software Engineer</h2>
      </div>
      <div>
        <h3 className={classes.tituloSeccion}>Contact and networks</h3>
        <p className={classes.zoomingText}>
          <EmailIcon className={classes.icons} /> nicolasbellanich@gmail.com
        </p>
        <p className={classes.zoomingText}>
          <PhoneIcon className={classes.icons} />
          +54 351-2080462
        </p>
        <p className={classes.zoomingText}>
          <LinkedinIcon className={classes.icons} />{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nicolasdariobellanich70491/"
          >
            My profile 
          </a>
        </p>
        <p className={classes.zoomingText}>
          <GithubIcon className={classes.icons} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.github.com/NicoBellanich"
          >
            My portfolio 
          </a>
        </p>
      </div>
      <div>
        <h3 className={classes.tituloSeccion}>Job experience</h3>
        <Accordion>
          <AccordionSummary>
            <p>» Full stack developer </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <div>
                <CalendarIcon className={classes.icons}/>November 2020 - Present
              </div>
              <div>
                <BuildingIcon className={classes.icons}/> Bitlogic.io
              </div>
              <div>
                <ChatIcon className={classes.icons} />
                Focus on front end development I´m working with React. Also I
                help with Java using Springboot. I´m working with figma making
                some mockups of what we programm after with the team
              </div>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <p>» Full stack developer </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <div>
                <CalendarIcon className={classes.icons}/>September 2020 - October 2020
              </div>
              <div>
                <BuildingIcon className={classes.icons}/> WeDevelop
              </div>
              <div>
                <ChatIcon className={classes.icons} />
                I worked as full stack developer for an MVP project. I tryed to implement some
                mockups at frontend. Also we worked with a mail newsletter at the backend. We also made some 
                interviews to know better our cliend and worked with lean UX to improve our work time.
              </div>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <p>» Full stack trainee program </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <div>
                <CalendarIcon className={classes.icons}/>May 2020 - August 2020
              </div>
              <div>
                <BuildingIcon className={classes.icons}/> WeDevelop
              </div>
              <div>
                <ChatIcon className={classes.icons} />
                I was selected to be part of this full-stack begginers programm. We worked
                with the newest technologies such as GraphQL , Apollo-Server & Apollo-Client,
                React, Node, PostgreSQL and much more. Also we made a lot of research and 
                had learnigns about UX/UI. Also we met some authentication methods like JWT.
                It was a very complete experience. After that I was selected to stay on the 
                company.
              </div>
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <p>» Python scrapping  </p>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              <div>
                <CalendarIcon className={classes.icons}/>January 2020 - March 2020
              </div>
              <div>
                <BuildingIcon className={classes.icons}/> Freelance
              </div>
              <div>
                <ChatIcon className={classes.icons} />
                  A friend called me to work side by him in this project for a local
                  shop in my city. He had some things made by that time but I helped him
                  for finishing the work. He also teached git-github things. And we helped
                  the shop to kwon data about the house rental prices on the city. We used Pandas 
                  and worked with .CSV files to present the data with Excels graphs.
              </div>
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <h3 className={classes.tituloSeccion}>Education & courses</h3>
        <p>
          <div>
            <UniversityIcon  className={classes.icons}/> I finished my engineer degree on february 2021
          </div>
          <div>
            <UniversityIcon  className={classes.icons}/> I studied English since I was a child. But I got my Cambridge certification on 2015
          </div>
          <div>
            <BooksIcons  className={classes.icons}/> Actually I´m studing by myself thigs related to data science. Such as Tableau or Machine Learning with Python.
          </div>
        </p>
      </div>
    </div>
  );
};

export { Body };
