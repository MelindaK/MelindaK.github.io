import React from "react"
// import { Link } from "gatsby"

import "./sass/index.scss"

const SocialLinks = () => (
  <div className="social">
    <a alt="github link" href="https://github.com/MelindaK/MelindaK.github.io" target="_blank" rel="noopener noreferrer">
      <span className="icon github"></span>
    </a>
     <a alt="github link" href="https://linkedin.com/in/melinda-kilner" target="_blank" rel="noopener noreferrer">
      <span className="icon linkedin"></span>
    </a>
    <a alt="mail link" href="mailto:melinda.kilner@gmail.com" target="_blank" rel="noopener noreferrer">
      <span className="icon mail"></span>
    </a>
  </div>
)

export default SocialLinks
