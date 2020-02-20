import React, { Component } from "react";
import styled from "styled-components";
import Portfolio_website from "../img/Portfolio_website.png";
import Quire from "../img/Quire.png";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <br />
      <Container>
        <ul className="portfolio">
          <li>
            <a
              href="https://github.com/annalysethis/My_Portfolio"
              target="_blank"
            >
              <img
                className="project-pic"
                alt="My Portfolios homepage"
                src={Portfolio_website}
              ></img>
            </a>
          </li>
          <li>
            <b>My Portfolio Website:</b> <br />
            <p>This is my portfolio website which I made in react.</p>
            <a
              href="https://github.com/annalysethis/My_Portfolio"
              target="_blank"
              subject="subject text"
            >
              Link to Github: https://github.com/annalysethis/My_Portfolio
            </a>
          </li>
        </ul>

        <ul className="portfolio">
          <li>
            <a
              href="ttps://github.com/AD757/fe19tp1_TeamStaple"
              target="_blank"
            >
              <img
                className="project-pic"
                alt="My Portfolios homepage"
                src={Quire}
              ></img>
            </a>
          </li>
          <li>
            <b>Quire Notebook:</b> <br />
            <p>A team project we did in school.</p>
            <a
              href="https://github.com/AD757/fe19tp1_TeamStaple"
              target="_blank"
              subject="subject text"
            >
              Link to Github: https://github.com/AD757/fe19tp1_TeamStaple
            </a>
          </li>
        </ul>
      </Container>
      <div className="links">
        <br />
        <a
          href="https://github.com/annalysethis"
          target="_blank"
          subject="subject text"
        >
          <b>My Github</b>
        </a>
        <br />
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vRLtyqjOYeUBG6ag1K6k4sGJtT_wNXuhYCHx_aE-7bDS903aKQG8UjKxZN-UnXLTzJW6z25ZWw--sOX/pub"
          target="_blank"
          subject="subject text"
        >
          <b>My Resumé</b>
        </a>
      </div>
    </div>
  );
}

const Container = styled.div`
  padding: 30px;

  @media only screen and (max-width: 991.98px) {
    width: 95%;
  }
`;

export default Projects;
