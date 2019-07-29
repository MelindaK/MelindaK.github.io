import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Colors from "./colors.js"

import "./sass/index.scss"




const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (

      <nav className="navbar level" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand level-item has-text-centered">
            <h1 className="title is-4">
              <Link className="navbar-item"
                to="/"
              >
                Melinda Kilner
              </Link>
            </h1>
          <div className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >       
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navMenu" 
        className={`navbar-menu ${this.state.navBarActiveClass}`}
        >
          <div className="navbar-end has-text-centered">
            <a className="navbar-item">
              Work
            </a>

            <a className="navbar-item">
              Documentation
            </a>

             <a className="navbar-item">
               About
            </a>
            </div>
          </div>
        </div>
      </nav>

    )}

}

// Navbar.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Navbar.defaultProps = {
//   siteTitle: ``,
// }

export default Navbar
