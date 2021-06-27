import React from "react";
import ReactDom from "react-router-dom";
import "./home.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import logo from "../Homes/download1.png";

const Home = () => {
  return (
    <>
      <div className="home-maindiv">
        <div className="heading">
          <h5>Welcome to IJATSR</h5>
        </div>
        <p>
          <span>Dear Colleagues,</span>
          <br />
          The IJATSR: International Journal of Advanced Technology and Science
          Research, welcomes you. IJATSR would like to thank you for your online
          journal interest. The online journal system has been diffused very
          fast since October, 2020. It has continued to diffuse new trends in
          Advanced Technology & Science to all over the world. We hope that the
          journal will also successfully accomplish our global science and
          technology goal.
        </p>
        <p>
          Any views expressed in journal are the views of the authors and are
          not the views of the Editor and IJATSR.
        </p>

        <p>
          IJATSR invites you article contributions. Submitted articles should be
          about all aspects of Advanced Technology & Science. The articles
          should be original, unpublished, and not in consideration for
          publication elsewhere at the time of submission to IJATSR. Manuscripts
          must be submitted in English.
        </p>

        <p>
          IJATSR is guided by it’s editors, guest editors and advisory boards.
          If you are interested in contributing to IJATSR as an author, guest
          editor or reviewer, please send your cv to
          <span>submit@ijatsr.org</span> .
        </p>

        <p>
          The publication of an article in a peer reviewed journal is an
          essential model for our journal. It is necessary to agree upon
          standards of expected ethical behavior for all parties involved in the
          act of publishing: the author, the journal editor, the peer reviewer
          and the publisher. Our ethic statements are based on
          <b className="underline">
            Committee on Publication Ethics, COPE’s Best Practice Guidelines
          </b>
          for Journal Editors. for more information visit:
          <br />
          <NavLink
            to="/publication-ethic-statement"
            className="publication-ethic-statement"
          >
            Publication Ethic Statements.
          </NavLink>
        </p>
        <p>
          <b>Language:</b>
          English.
          <br />
          <b>Type:</b>
          Peer-Review.
          <br />
          <b>Frequency:</b>
          Monthly.
        </p>
        <p className="heading">
          <h5>Article Invitation</h5>
        </p>
        <p className="red">
          <b>
            Paper Submission is Open for Upcoming Issue June 2021
            <NavLink to="online-paper-submission" className="btn">
              <img src={logo} alt="plus" />
            </NavLink>
          </b>
        </p>
        <p>
          <span>Email: submit@ijatsr.org</span>
        </p>
        <p>
          We invited research/ review articles from authors all over the year,
          The IJATSR is accepting papers all round the year for consideration
          into publication, IJATSR is published as a monthly journal, articles
          submitted will be published once in a months. Journal publishes
          peer-reviewed original research papers, case studies, review articles
          and technical notes. The journal allows free access to its contents,
          which is likely to attract more readers and citations to articles
          published in IJATSR. The Journal will accept original and innovative
          submissions in English on the understanding that the work is
          unpublished and is not being considered for publication elsewhere.
        </p>
        <p className="heading">
          <h5>Mission</h5>
        </p>
        <p>
          IJATSR is pleased to offer free access to online publishing. We are
          committed to promote academic exchanges and progress. Publishing with
          IJATSR will provide high visibility of your research work and make you
          know the latest academic trends. The aim of the IJATSR: International
          Journal of Advanced Technology and Science Research (IJATSR) is to
          foster the growth of educational, scientific and industrial research
          activities among the Researchers and to provide a medium for mutual
          communication between the world academia and the industry on the one
          hand, and the world scientific community on the other.
        </p>
      </div>
    </>
  );
};
export default Home;
