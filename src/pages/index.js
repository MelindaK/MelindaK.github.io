import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import PostList from "../components/postlist"
import AboutSection from "../components/about"
import SEO from "../components/seo"

import "../components/sass/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="layout-container ">
    <section className="section-intro">
      <h1 className="title">Hi there!</h1>
	    <p>I’m Melinda, a product designer living in San Francisco. I’ve worked extensively in user experience design and front-end web development and I find my groove anywhere I can dig into hard problems, make people’s lives a tiny bit easer, and learn something new every day. Feel free to check out some of my projects below.</p>
    </section>
    </div>
    <section id="projects" className="section-bleed-bg">
  	    <PostList></PostList>
    </section>    
    
    <section className="section-outro layout-container">Thanks for visiting!</section>
    <div className="image-me">
      <Image></Image>
    </div>
    <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Layout>
)

export default IndexPage
