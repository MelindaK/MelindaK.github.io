import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageAbout from "../components/imageabout"

import "../components/sass/index.scss"

const AboutPage = () => (
  <Layout>
  <div className="layout-container ">
    <SEO title="About me" />

    <div 
    	style={{
		width: `50%`,
		float: `left`
	    }}>
    <ImageAbout></ImageAbout>

    </div>
    <h2
	style={{
		float: `left`,
		paddingLeft: `20px`
	}}>
	I'll bring coffee :)</h2>
   </div> 
  </Layout>
)

export default AboutPage
