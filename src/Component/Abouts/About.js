import React from "react";
import ReactDom, { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
     <div className="home-maindiv Aim-main-div">
        <div className="heading">
          <h5>About IJATSR</h5>
        </div>
        <p>
        The IJSSER is a worldwide open access publisher serving the academic research community by launching peer-reviewed journals covering a wide range of academic disciplines. As an international academic organization for researchers & scientists, we aim to provide researchers, writers, academic professors and students the most advanced research achievements in a broad range of areas, and to facilitate the academic exchange between them. Compliant with open access policies, published materials can be copied and distributed without obtaining permission as long as a correct citation to the original publication is given. We are committed to the advancement of the science and the applications through our publications. At IJSSER Research Publishing, we want to ensure that your publishing experience goes as smoothly as possible so that you can focus on what really counts.
        </p>
        <p>
          <b>Open Access</b>
          <br/>
          <br />
          Open access is the practice of providing unrestricted access to peer-reviewed academic journal articles via the internet. It is also increasingly being provided to scholarly monographs and book chapters. All original research papers published by IJSSER are available freely and permanently accessible online immediately after publication. Readers are free to copy and distribute the contribution under creative commons attribution-non commercial licence. Authors can benefit from the open access publication model a lot from the following aspects:     
        </p>
        <p>
            <b>Publication Ethics Statement</b><br/><br/>
            IJSSER is committed to maintain the highest quality original research materials. All papers accepted for publication will be subjected to a rigorous peer-review. Any papers suspected of plagiarism, falsification and inauthentic authorship will never be published.
        </p>
        <p>
            <b>Creative Commons Attribution License (CC-BY)</b><br/><br/>
            All articles published by IJATSR will be distributed under the terms and conditions of theCreative Commons Attribution License(CC-BY). So anyone is allowed to copy, distribute, and transmit the article on condition that the original article and source is correctly cited.
        </p>
        <p>
            <b>Article Processing Charges</b><br/><br/>
            In an open access model, we promise that readers don't pay for the subscription fee to access online published articles. For authors, only some fundamental costs like editing, production and peer- review are included to maintain normal operations of our company. These Article Processing Charges(APC) are only used to support publishers to make the published articles freely available to all readers. In order to encourage the long-term scientific research, authors are eligible for various discounts on  <NavLink to="/publication-charges" className="lin">
            Article Processing Charges(APC).
          </NavLink> </p>

      </div>
    </>
  );
};
export default About;
