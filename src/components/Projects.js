import React, { Component } from "react";
import styled from "styled-components";
import Portfolio_website from "../img/Portfolio_website.png";
import Quire from "../img/Quire.png";
import SpaceDogs from "../img/spacedogs.png";
import SaloonApp from "../img/SaloonApp.png";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }

  div {
    width: 500px;
    padding: 20px;
    align-self: center;

    @media (max-width: 500px) {
      width: 300px;
    }
  }

  p {
    font-size: 20px;

    @media (max-width: 500px) {
      font-size: 17px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export class Projects extends Component {
  render() {
    return (
      <Container>
        <h1>Projects</h1>
        <Wrapper>
          <div>
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
          </div>
          <div>
            <h3>My Portfolio Website:</h3>
            <p>This is my portfolio website which I made in react.</p>
            <a
              href="https://github.com/annalysethis/My_Portfolio"
              target="_blank"
              subject="subject text"
            >
              Link to Github
            </a>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <a
              href="https://github.com/AD757/fe19tp1_TeamStaple"
              target="_blank"
            >
              <img
                className="project-pic"
                alt="Notebook application"
                src={Quire}
              ></img>
            </a>
          </div>
          <div>
            <h3>Quire Notebook:</h3>
            <p>A team project we did in school.</p>
            <a
              href="https://github.com/AD757/fe19tp1_TeamStaple"
              target="_blank"
              subject="subject text"
            >
              Link to Github
            </a>
          </div>
        </Wrapper>
        <Wrapper>
          {" "}
          <div>
            <a href="https://fe19tp3-easyweb.now.sh/" target="_blank">
              <img
                className="project-pic"
                alt="Notebook application"
                src={SpaceDogs}
              ></img>
            </a>
          </div>
          <div>
            <h3>Space Dogs:</h3>
            <p>
              A team project we did in next.js in school. This is a website we
              made out of easyweb.se's API. The subpages are still under
              construction.
            </p>
            <a
              href="https://github.com/annalysethis/space_dogs"
              target="_blank"
              subject="subject text"
            >
              Link to Github
            </a>
          </div>
        </Wrapper>
        <Wrapper>
          {" "}
          <div>
            <a href="https://github.com/annalysethis/techtest" target="_blank">
              <img
                className="project-pic-mobileView"
                alt="Hair Saloon application"
                src={SaloonApp}
              ></img>
            </a>
          </div>
          <div>
            <h3>Hair Saloon App:</h3>
            <p>
              This is a techtest I made in react. It's a saloon application in
              mobile view. Only the price filter and the "go back-button" are
              active. And you can also click on the saloons to view the
              information.
            </p>
            <a
              href="https://github.com/annalysethis/techtest"
              target="_blank"
              subject="subject text"
            >
              Link to Github
            </a>
          </div>
        </Wrapper>
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
      </Container>
    );
  }
}

export default Projects;
