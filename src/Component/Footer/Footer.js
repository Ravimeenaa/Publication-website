import React from "react";
import ReactDom from "react-dom";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="main-div">
        <div className="inner-div">
          <h5>Privacy Statement</h5>
          <p>
            The names and email addresses entered in this journal site will be
            used exclusively for the stated purposes of this Publication and
            will not be made available for any other purpose or to any other
            party.
          </p>
        </div>
      </div>
      <footer className="foo-div">
          <div className="inn-div">
        <p>© 2021 IJATSR All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
