import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ButtonHome from "./components/ButtonHome";
import Projects from "./components/Projects";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* Switch söker ingenom alla "Route" och stannar så fort den får en matchning */}
        {/* add exact to make it only show when the match is exactly "/" */}
        <Switch>
          {/* man skriver component= {Länken} så att den länkas till rätt sida */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <section className="home">
      <ButtonHome />
    </section>
    <Footer />
  </div>
);

export default App;
