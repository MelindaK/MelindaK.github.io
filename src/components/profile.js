import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const ProfileImage = () => (
  <StaticQuery
    query={graphql`
      query {
        profileImage: file(relativePath: { eq: "image-profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.profileImage.childImageSharp.fluid} alt="It's me!" title="It's me!" />}
  />
)
export default ProfileImage
