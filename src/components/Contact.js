import React, { Component } from "react";
import styled from "styled-components";
import Weather from "./weather.component";

// API KEY: APPID=f8384513fad5f91ea04d07a2cbf916ec
const API_Key = "f8384513fad5f91ea04d07a2cbf916ec";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWeather();
  }

  calCelsius(temp) {
    let cell = Math.round(temp);
    return cell;
  }

  getWeather = async () => {
    const api_call = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric&appid=${API_key}"
    );

    const response = await api_call.json();

    console.log(response);

    this.setState({
      // celsius: response.main.temp,
      // temp_max: response.main.temp_max,
      // temp_min: response.main.temp_min,
      city: response.name,
      country: response.sys.country,
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      celsius: this.calCelsius(response.main.temp),
      description: response.weather[0].description
    });
  };
  render() {
    return (
      <div>
        <ContactContainer>
          <h1>Contact Me:</h1>
          <ul className="contact-list">
            <li>
              <b>Email:</b>{" "}
              <a href="mailto: <Anna> anna.hurtig@hotmail.com">
                anna.hurtig@hotmail.com
              </a>
            </li>
            <br />
            <li>
              <b>Github:</b>{" "}
              <a href="https://github.com/annalysethis" subject="subject text">
                https://github.com/annalysethis
              </a>
            </li>
          </ul>
        </ContactContainer>
        <div className="WeatherAPI">
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp_celsius={this.state.celsius}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description}
          />
        </div>
      </div>
    );
  }
}
const ContactContainer = styled.div`
  margin-top: 50px;
`;

export default Contact;