import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import breatheGif from "../images/breathe.gif"




const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section style={{
			maxWidth: `460px`,
			margin: `0 auto`,
			textAlign: `center`,
	    }} >
    

    <img src={breatheGif} alt="Snoozing cat" 
    	style={{
			width: `200px`,
	    }} />
    <h1>Whoops</h1>
    <p>Looks like this page doesn&#39;t exist. Not to worry — you can stay here and rest for a bit, or head back <Link to="/">home</Link>.</p>
    </section>
  </Layout>
)

export default NotFoundPage
