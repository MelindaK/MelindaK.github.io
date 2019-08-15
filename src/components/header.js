import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Colors from "./colors.js"
import styled from 'styled-components';

import "./sass/index.scss"



const NavLink = styled.p`
  display: inline-block;
  padding-left: 40px;

  &:last-of-type {
    padding-left: 0;
  }

  a {
    color: ${Colors.softblack};
    text-decoration: none;
    position: relative;
    transition: 100ms;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: ${Colors.cinnabar};
      transition: 100ms;
    }

    &:hover {
      color: ${Colors.cinnabar};
      text-decoration: none;
      &:after {
        width: 100%
      }
    }
  }  
`


const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="layout-container">
        <h1>
          <Link to="/"
          >
            {siteTitle} 
            <br/><span className="label">Product Designer</span>
          </Link>
        </h1>
      <NavLink>
        <Link
          to="/about/"
        >
          About
        </Link>
      </NavLink>
      <NavLink>
        <Link
          to="/#projects"
        >
          Projects
        </Link>
      </NavLink>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
