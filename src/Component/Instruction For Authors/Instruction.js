import React from "react";
import {NavLink} from'react-router-dom';
import './Instruction.css'

const Instruction = () => {
  return (
    <>
     <div className="home-maindiv Instruction-main-div">
        <div className="heading">
          <h5>Instruction For Authors</h5>
        </div>
        <p>

        <b>How to submit manuscripts</b>
        <br/>
        <br/>
        Please indicate your understanding that the article will not be under consideration by any other publisher while it is being reviewed by IJATSR: International Journal of Advanced Technology and Science Research. Please also alert us if a similar or related article has been accepted, or is under consideration by, another journal. In such cases, we may request a copy of the similar or related article. All submissions to International Journal of Advanced Technology and Science Research must be submitted electronically via the IJATSR online management system:
        <br/>
        <br/>
        <NavLink to="contact-for-help" className="lin">
          Online Submission System 
          </NavLink>
        </p>
        <p>
          Authors also can send their papers to <b>submit@ijatsr.org .</b>
          </p>
          <p>
          <div className="heading">
          <h5>Components of a manuscript</h5>
        </div>
          <b>Title Page</b>

          <p>
          <b>Paper Title :</b> A title of no more than 20 words should be brief, specific, and informative.
          </p>

         <p>
         <b>Author Details :</b> Full name for all authors should be given; The names of multiple authors are separated by a comma; Provide the full affiliation for each author including academic affiliation (or postal address), city, postcode, country, Email(optional); If multiple authors have contributed to the article, details of the corresponding author should be clear. Email address is compulsory for the corresponding author.
         </p>
          
         <p>
         <b>Abstract</b>
         </p>
          
          <p>
          The abstract of not more than 250 words should be a condensed version of the final presentation and include all significant findings. Please do not divide the abstract into sub-sections.
          </p>
          
         <p><b> Keywords:</b>Include 3 to 8 keywords or short phrases for indexing.</p>
          
          <p>
            <b> Body Text</b>
          </p>

          <p>The text should be divided into sections, each with a separate heading and numbered consecutively. The section/subsection headings should be typed on a separate line.
          </p>

          <p><b>Tables and figures</b></p>

          <p>Tables and figures must be submitted together with the main text manuscript.</p>

          <p><b>Result</b></p>

          <p>Results should be clear and concise.</p>

          <p><b>Discussion</b></p>

          <p>This should explore the significance of the results of the work, not repeat them. A combined Results and Discussion section is often appropriate. Avoid extensive citations and discussion of published literature.</p>

          <p><b>Conclusions</b></p>

          <p>The main conclusions of the study may be presented in a short Conclusions section, which may stand alone or form a subsection of a Discussion or Results and Discussion section.</p>

          <p><b>Acknowledgments</b></p>

          <p>The journal expects that topically relevant funding sources and conflicts of interest are fully disclosed in the acknowledgments of all submissions. Please omit the word "number" from grant or contract acknowledgments.</p>

          <p><b>References</b></p>

          <p>References are each numbered, ordered sequentially as they appear in the text, methods summary, tables, boxes, figure legends, online-only methods, Extended Data tables and Extended Data figure legends.</p>

          <p><b>Copyright and Article processing fee</b></p>

          <p>If your paper is accepted, the author identified as the formal corresponding author for the submission of Copyright form and Article processing fee. Detail of Article Processing Fee are given in publication charges page.</p>

          <p><b>Publishing process</b></p>

          <p>Papers publish in IJATSR: International Journal of Advanced Technology and Science Research covers seven steps:</p>

          <p>Author submits a manuscript {">>>"} Journal editor screens manuscript {">>>"} Manuscript is peer reviewed {">>>"} Journal editor/editorial board decides whether to publish {">>>"} Copy Editing and Typesetting {">>>"} Proof Reading {">>>"} Publishing.</p>
        </p>
      

      </div>
    </>
  );
};
export default Instruction;