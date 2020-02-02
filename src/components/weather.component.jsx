import React, { Component } from "react";
import styled from "styled-components";
import { up, down, between, only } from "styled-breakpoints";

const Weather = props => {
  return (
    <WeatherContainer>
      <Header>CURRENT WEATHER IN:</Header>
      <WeatherBox>
        <City>
          {props.city}, {props.country}
        </City>
        <h1 className="celsius">{props.temp_celsius}&deg;</h1>
        {/* Show max and min temp */}
        {minmaxTemp(props.temp_min, props.temp_max)}

        <Description>{props.description}</Description>
      </WeatherBox>
    </WeatherContainer>
  );
};
const Description = styled.h4`
  text-transform: uppercase;
  font-size: 13px;
`;

const City = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
`;

const WeatherBox = styled.div`
  border: 1px solid #eee;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 2px 2px #ddd;
`;

const WeatherContainer = styled.div`
  color: rgb(176, 172, 172);
  padding: 25px;
  float: right;
`;
const Header = styled.h5`
  color: black;
`;

function minmaxTemp(min, max) {
  return (
    <TempMinMax>
      <MinTemp>{min}&deg; </MinTemp>

      <MaxTemp>{max}&deg; </MaxTemp>
    </TempMinMax>
  );
}

const MinTemp = styled.div`
  margin-right: 15px;
  font-size: 26px;
`;

const MaxTemp = styled.span`
  margin-left: 15px;
  font-size: 25px;
`;

const TempMinMax = styled.h3`
  display: flex;
  height: 100%;
  justify-content: center;
`;

export default Weather;
