import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileImage from "../components/profile"

import "../components/sass/index.scss"

const About = ({ data }) => (
  <Layout>
  <SEO title="About me" />
    <Img fluid={data.image4.childImageSharp.fluid} title="Colorful soaps in Aix" alt="Colorful soaps display in Aix" />
  <div className="layout-container about-page">
      <section className="section-profile">
          <div className="image-profile">
            <ProfileImage></ProfileImage>  
          </div>
      </section>
        <div className="content">
            <h3>Nice to meet you! <span role="img" aria-label="wave">👋</span> </h3>
          <p>I'm Melinda. I landed in the Bay Area in 2006 after a somewhat nomadic lifestyle and felt like I'd found my place. It's been the perfect home base to continue to indulge my travel bug (I'm up to 32 countries but who's counting) knowing I have this wonderful weird city waiting for me. I've leaned into the San Francisco lifestyle by taking up sourdough bread baking - the best hobby because it results in eating and sharing a lot of warm, fresh, loaves of bread (...and pizza, and bagels, and sourdough pancakes). It pairs nicely with my podcast addiction (just ask and I'll send you my spreadsheet of recommendations), urban hikes (with great hills come stunning views), and making human or canine friends.</p>
        </div>
        <div className="content">
          <h3>But back to design... <span role="img" aria-label="artist palette">🎨</span></h3>
          <p>I've always felt a fairly constant tug between wanting to immerse myself in <b>how</b> to do something—to execute, build, create—and being excited by wholy new ideas, new problems to solve, new ways of thinking. I can still remember what it felt like to write my first lines of CSS—both satisfying in itself and full of future potential. It was the same feeling I had when I discovered UX design was possible career path—a field with an endless stream of problems to tackle, where the work necessitates not already knowing the answer, and having to think broadly then craft with precision. I feel fortunate to work in a space that is constantly evolving, both in the large sense of how people interact with technology, and in the tools available to build with. The perpetual student in me revels in digging into the latest prototyping tools (currently looking at you, FramerX) or teaching myself React to build this website!</p>
        </div>
        <div className="content">
          <h3>Aw, shucks <span role="img" aria-label="happy face">😊</span></h3>
          <p>Honestly, nothing makes work more rewarding than knowing I've positively impacted others. Some very kind people have said some really nice things about me, so I'm sharing some of that here:</p>
          <section className="section-quote">
            <blockquote>
              <p>“Melinda is generally recognized as one of the most competent, informed, and thoughtful people on the UX team, if not the broader company. People mention her ability to juggle multiple responsibilities, being proactive and helpful wherever possible, and tailoring her solutions to meet real and specific needs based on feedback and compromise.”</p>
                <br/>
                <span className="attribute">360 feedback summary 2019</span>
            </blockquote>
            </section>
            <section className="section-quote">
            <blockquote>
            <p>
            “Melinda delivers top quality work at every turn. For years she has truly delighted our customers by designing (and uplifting) their templates and building custom demos and content samples, and now she is bringing her same stellar design sense to our platform in her role on the Product Design team. Melinda's quality work extends far beyond her technical and visual design skills, though. She is able to eloquently communicate to customers and colleagues alike the factors that drive her design decisions, sharing the content and design best practices employed in her work, and is able to break down technical concepts, limitations/<wbr/>constraints, and bugs in non-technical terms (or stay in the technical weeds when her audience can keep up!). And, she handles herself with total professionalism and integrity in every work interaction (both internally and externally). There are few people who can serve as a better face of Inkling when in front of customer teams.” </p>
                <br/>
                <span className="attribute">Otto Award Nomination</span>
            </blockquote>
            </section>
            <section className="section-quote">
            <blockquote>
            <p>“Melinda, you rock!” </p>
              <br/>
              <span className="attribute">Tom @ Chick-fil-A</span>
            </blockquote>
            </section>

          </div>
  </div> 

  </Layout>
)




export const aboutImage = graphql`
  fragment aboutImage on File {
    childImageSharp {
      fluid(maxWidth: 3000, maxHeight: 420) {
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
    image4: file(relativePath: { eq: "about/soaps.jpg" }) {
      ...aboutImage
    }
  }
`


export default About
