import { Link, StaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
// import imageOne from "../images/ocean.jpg"

import "./sass/index.scss"



const PostList = (props) => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
		allMarkdownRemark(
			limit: 10
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true}}}
		) {
		  edges {
		    node {
		      id
		      frontmatter {
		        title
		        path
		        published
		        description
		        thumbnail {
	              childImageSharp {
				    fluid(maxWidth: 500, quality: 100) {
      					...GatsbyImageSharpFluid
	                }
	              }
	            }
	          }
		    }
		  }
		}
	  }
    `}
   
  render={data => ( 
	<section className="post-list layout-container">
		{data.allMarkdownRemark.edges.map(post => (
			<div className="post-item-container">
		    <article className="post-item">
		    
		    	<div className="post-thumbnail"> 
		    		<Img fluid={post.node.frontmatter.thumbnail.childImageSharp.fluid} alt={post.node.frontmatter.title} />
		    	</div>
		    	<div className="post-content">
			    	<h4 class="title is-4">{post.node.frontmatter.title}</h4>
			    </div>
		    	<Link
		    		key={post.node.id} 
		    		to={post.node.frontmatter.path}

		    		style={{
						height: `100%`,
						width: `100%`,
				        position: `absolute`,
				        left: 0,
			            top: 0,
			            zIndex: `4`,
				    }}
		    	>	
		    	</Link>
		 	</article>
		 	</div>	
		))}
	</section>
	)}
  />	
)


export default PostList