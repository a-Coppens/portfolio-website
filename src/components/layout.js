/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Navbar from "./navbar"
import Header from "./header"
import ThemeIcon from "./themeIcon"


const Layout = ({ children }) => {
  /*const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)*/

  return (
    <>
   
      <div id="foreground" style={{height: "100%"}}>
        <Navbar></Navbar>
        <div className="shapeContainer">
         <Header></Header>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
              
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a className="noStyleLink" href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
          <ThemeIcon></ThemeIcon>
        </div>
      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
