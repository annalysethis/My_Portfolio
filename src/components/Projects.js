import React, { Component } from "react";
import styled from "styled-components";
import Portfolio_website from "../img/Portfolio_website.png";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <br />
      <div className="projectsContainer">
        <a href="https://github.com/annalysethis/My_Portfolio">
          <img
            id="portfolio-pic"
            alt="My Portfolios homepage"
            src={Portfolio_website}
          ></img>
        </a>
        <ul className="project-list">
          <li>
            <b>My Portfolio Website:</b> <br />
            <p>This is my portfolio website which I made in react.</p>
            <a
              href="https://github.com/annalysethis/My_Portfolio"
              subject="subject text"
            >
              Link to Github: https://github.com/annalysethis/My_Portfolio
            </a>
          </li>
        </ul>
      </div>
      <div className="linkGithub">
        <b>Link to my Github:</b> <br />
        <a href="https://github.com/annalysethis" subject="subject text">
          https://github.com/annalysethis
        </a>
      </div>
    </div>
  );
}

const ProjectsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  width: 70%;
  margin: auto;
`;

export default Projects;
