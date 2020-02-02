import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ButtonHome() {
  return (
    <BtnWrapper>
      <Link to="/projects">
        <button className="home-btn">My Projects</button>
      </Link>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

export default ButtonHome;
