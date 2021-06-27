import React from "react";
import ReactDom from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./aim.css";
import "../Homes/home.css";

function Aim() {
  return (
    <>
      <div className="home-maindiv Aim-main-div">
        <div className="heading">
          <h5>Aim and Scope</h5>
        </div>
        <p>
          IJATSR: International Journal of Advanced Technology and Science
          Research is open to submission from scholars and experts in the wide
          areas of Advance Technology & Science Research.
        </p>
        <p>
          The scope of the journal includes all issues in the field of Advanced
          Technology & Science.The IJATSR but not restricted to the topics. The
          IJATSR publishes basically in conformity with publication ethics codes
          based on the COPE(committee on publication ethics:
          http://publicationethics.org/). Additionally, the IJATSR publication
          complies strictly with the general research ethics codes of the
          IJATSR(http://www.ijatsr.org).
        </p>
        <p>
          IJATSR: International Journal of Advanced Technology and Science
          Research (IJATSR) papers are solicited from, but not limited to the
          following topics:
        </p>
        <p>
          <ul>
            <li>Science and Knowledge in General</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Earth Sciences</li>
            <li>Space Sciences</li>
            <li>Computer Science</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Mathematics</li>
            <li>Agricultural Science</li>
          </ul>
        </p>
        <p>
          Reviews and tutorial articles on contemporary subjects are strongly
          encouraged. All papers are to be reviewed by at least three
          independent reviewers and authors of all accepted papers would be
          required to complete a copyright from transferring all rights to the
          IJATSR. For more detailed you can contact us
          <NavLink to="contact-for-help" className="lin">
            here...
          </NavLink>
        </p>
      </div>
    </>
  );
}
export default Aim;
