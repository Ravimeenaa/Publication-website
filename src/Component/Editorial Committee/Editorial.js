import React, { useEffect, useState } from 'react'; 
import ReactDom from "react-router-dom";
import axios from 'axios'
import "./editorial.css";


function Editorial() {
const gitHubUrl = "https://jsonplaceholder.typicode.com/users";

const [userData, setUserData] = useState([]);

  useEffect(() => {
    getGitHubUserWithFetch();
  },[] );

  const getGitHubUserWithFetch = async () => {
    const response = await axios.get(gitHubUrl);
    console.log(response)
    setUserData(response.data);
  };
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
        <p className="name">Editorial Board Member:{userData.length > 0 && (<b>{userData[0].name}</b>)}</p>
          <p className="discripation">
            <b>Associate Researcher, Lecturer</b>
            <br/>
            Email: {userData.length > 0 && (<b>{userData[0].email}</b>)}
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
        <p className="name">Editorial Board Member:{userData.length > 0 && (<b>{userData[1].name}</b>)}</p>
          <p className="discripation">
            <b>Associate Professor</b>
            <br/>
            Email: {userData.length > 0 && (<b>{userData[1].email}</b>)}
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
          <p className="name">Editorial Board Member:{userData.length > 0 && (<b>{userData[2].name}</b>)}</p>
          <p className="discripation">
            <b>Associate Researcher, Lecturer</b>
            <br/>
            Email: {userData.length > 0 && (<b>{userData[2].email}</b>)}
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
