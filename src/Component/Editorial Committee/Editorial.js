import React from "react";
import ReactDom from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./editorial.css";

function Editorial() {
  return (
    <>
      <div className="Editorial-maindiv">
        <div className="heading">
          <h5>Editorial Committee IJATSR</h5>
        </div>
        <div className="maindiv">
          <p className="name">Editor-In-Chief: Payal</p>
          <p className="discripation">
            39, Mahalaxmi apartment
            <br />
            Mahaveer Nagar, Bangali Square
            <br />
            Indore (452001)
            <br />
            Madhya Pradesh, India
          </p>
        </div>
        <div className="maindiv">
          <p className="name">Editorial Board Member: <b>Dr. Emad D A Kaky, Ph.D.</b></p>
          <p className="discripation">
            <b>Associate Researcher, Lecturer</b>
            <br/>
            Email: emadd.abbas@spu.edu.iq
          </p>
          <p className="discripation">
           <ul>
             <li>Plant Physiology</li>
             <li>Species distribution modelling</li>
             <li>Conservation biology</li>
           </ul>
          </p>
        </div>
        <div className="maindiv">
          <p className="name">Editorial Board Member: <b>Dr. Shubham Agarwal, Ph.D.</b></p>
          <p className="discripation">
            <b>Associate Professor</b>
            <br/>
            Email: meshubhamagarwal@gmail.com
          </p>
          <p className="discripation">
           <ul>
             <li>Mathematics</li>
             <li>Computational Algebraic number theory</li>
             <li>modern cryptography</li>
             <li>Statics</li>
           </ul>
          </p>
        </div>
        <div className="maindiv">
          <p className="name">Editorial Board Member: <b>Dr. Emad D A Kaky, Ph.D.</b></p>
          <p className="discripation">
            <b>Associate Researcher, Lecturer</b>
            <br/>
            Email: emadd.abbas@spu.edu.iq
          </p>
          <p className="discripation">
           <ul>
             <li>Plant Physiology</li>
             <li>Species distribution modelling</li>
             <li>Conservation biology</li>
           </ul>
          </p>
        </div>

      </div>
    </>
  );
}
export default Editorial;
