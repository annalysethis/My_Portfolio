import React, { useState, useEffect } from "react";
import Anna from "../img/Anna.jpg";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-wrapper">
        <img id="Anna" alt="A picture of Anna Hurtig" src={Anna}></img>
        <p className="about-text">
          I'm a front-end developer in the beginning of my career. <br />
          <br />
          What made me interested in front-end developing was the creative part
          of it. I've been a creative person for as long as I know and for the
          last couple of years I've been working extra as a singer songwriter in
          a band which has been a fantastic experience. <br />
          <br />
          But I've also always loved design. I remember, as a child, often
          spending time in my room drawing and writing things. Transforming my
          emotions into creativity. And that's something I still love doing,
          transforming emotions into creativity and sharing it with the world.
        </p>
      </div>
    </div>
  );
}

export default About;
