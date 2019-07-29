import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/sass/index.scss"

const AboutPage = () => (
  <Layout>
  <div className="layout-container ">
    <SEO title="About me" />
    <h1>About me.</h1>
   </div> 
  </Layout>
)

export default AboutPage
