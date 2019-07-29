import React from "react"
// import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({
	data,
}) {
	const { markdownRemark: post } = data;
	// const post = data.markdownRemark;
	return (
		
		<Layout>
		<div className="post-page content" style={{
			margin: `0 auto`,
        	maxWidth: 800,
        	padding: `1.45rem 1.0875rem`,
		}}>
			<h1>{post.frontmatter.title}</h1>
		
			<div dangerouslySetInnerHTML ={{__html: post.html}} />
		</div>
		</Layout>
		
		
	)
}

export const postQuery = graphql`
	query PostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`