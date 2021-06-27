import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/new-logo-ija.png";

function Nav() {
  return (
    <>
      <div className="nav-area">
        <div className=" inner-nav container">
          <div className="logo-left">
            <NavLink to="/">
              <img src={logo} alt="hhh" />
            </NavLink>
          </div>
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <div className="link-right">
            <ul>
              <li>
                <NavLink to="/" className=" Linkkk" href="/" >
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className=" Linkkk"  href="/about">
                  <span>About us</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className=" Linkkk"  href="/contact">
                  <span>Contact us</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
