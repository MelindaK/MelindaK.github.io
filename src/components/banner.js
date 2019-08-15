import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const BannerImage = () => (
  <StaticQuery
    query={graphql`
      query {
        bannerImage: file(relativePath: { eq: "about/soap.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.bannerImage.childImageSharp.fluid} title="Colorful soaps in Aix" alt="Colorful soaps display in Aix" />}
  />
)
export default BannerImage
