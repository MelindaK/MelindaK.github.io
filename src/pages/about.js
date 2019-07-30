import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import ImageAbout from "../components/imageabout"

import "../components/sass/index.scss"

const About = ({ data }) => (
  <Layout>
  <div className="layout-container about-page">
    <SEO title="About me" />

    <div className="image-wrapper">
    <Img fluid={data.image1.childImageSharp.fluid} alt="" />
    </div>
    <div className="content-wrapper">
    <h4>I'll bring coffee :)</h4>
	</div>
   </div> 
  </Layout>
)


export const aboutImage = graphql`
  fragment aboutImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "about/tulum-coffee.jpg" }) {
      ...aboutImage
    }
    image2: file(relativePath: { eq: "about/bread.jpg" }) {
      ...aboutImage
    }
    image3: file(relativePath: { eq: "about/catflowerbox.jpg" }) {
      ...aboutImage
    }
  }
`


export default About
