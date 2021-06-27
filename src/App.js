import React from "react";
import ReactDom from "react-dom";
import Nav from "./Component/Navbar/Nav";
import Submit from "./Component/submit-area/Submit";
import BlinkLine from "./Component/BlinkLine/BlinkLine";
import Section01 from "./Component/Section1/Section01";
import Section02 from "./Component/Section2/Section02";
import Section03 from "./Component/Section3/Section03";
import Footer from "./Component/Footer/Footer";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Component/Homes/Home";
import About from "./Component/Abouts/About";
import Contact from "./Component/Contacts/Contact";
import Aim from "./Component/Aim and Scope/Aim";
import Editorial from "./Component/Editorial Committee/Editorial";

function App() {
  return (
    <Router>
      <Switch>
        <div className="main">
          <div className="main_body">
            <Nav />
            <Submit />
            <BlinkLine />
            <div className="section container">
              <Section01 />
              <Section02 />
              <Section03 />
            </div>
            <Footer />
          </div>
        </div>
      </Switch>
    </Router>
  );
}
export default App;
