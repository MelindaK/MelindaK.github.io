import React from "react"


import Layout from "../components/layout"
import Image from "../components/image"
import PostList from "../components/postlist"
import SEO from "../components/seo"

import "../components/sass/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="layout-container ">
    <section className="section-intro">
      <h1 className="title">Hello!</h1>
	    <p>I’m Melinda, a product designer living in San Francisco. I’ve worked extensively in user experience design and front-end web development and I find my groove anywhere I can dig into hard problems, help make people’s lives a little bit better, and continue to learn new things. Feel free to check out some of my work below.</p>
    </section>
    </div>
    <section id="projects" className="section-bleed-bg">
  	    <PostList></PostList>
    </section>    
    
    
    
    <section className="section-outro layout-container">
    <div className="image-me">
      <Image></Image>
    </div>
    <p className="text-large">Thanks for visiting!</p></section>
    <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Layout>
)


export default IndexPage
