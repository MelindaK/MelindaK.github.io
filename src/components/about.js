// import PropTypes from "prop-types"
import React from "react"

import "./sass/index.scss"
import Colors from "./colors.js"


const AboutSection = () => (

	<section
		style={{
			width: `100%`,
	        background: Colors.cinnabar,
	        color: Colors.white,
	        marginBottom: `1.45rem`,
            padding: `40px 0`,
	    }}
	> 
		<div
			style={{
		        margin: `0 auto`,
	            maxWidth: 960,
		    }}
		>
			<h2 className="title" id="about">About me...</h2>
			<p>Globetrotter, San Francisco adoptee, baker of bread.</p>

		</div>	
	</section>
)


// AboutSection.propTypes = {
//   // children: PropTypes.node.isRequired,
// }


export default AboutSection