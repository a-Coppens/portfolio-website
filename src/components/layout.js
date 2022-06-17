/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./navbar"
import Header from "./header"
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsTwitch,
  AiOutlineMail,
} from "react-icons/all"

const Layout = ({ children }) => {
  return (
    <>
      <div id="foreground" style={{ height: "100%" }}>
        <Navbar></Navbar>
        <div
          style={{
            margin: `0 auto`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            <div>
              <a class="footer-link">
                <BsTwitch className="footer-icon" id="twitchIcon" size={24} />
              </a>
              <a class="footer-link" href="https://twitter.com/a_coppensdev">
                <BsTwitter className="footer-icon" id="twitterIcon" size={24} />
              </a>
              <a
                class="footer-link"
                href="https://www.linkedin.com/in/adam-coppens-a44956190/"
              >
                <BsLinkedin
                  className="footer-icon"
                  id="linkedInIcon"
                  size={24}
                />
              </a>
              <a class="footer-link" href="https://github.com/a-Coppens">
                <BsGithub className="footer-icon" id="githubIcon" size={24} />
              </a>
              <a class="footer-link" href="mailto:adam-coppens@outlook.com">
                <AiOutlineMail
                  className="footer-icon"
                  id="mailIcon"
                  size={24}
                />
              </a>
              <p>Adam Coppens, © {new Date().getFullYear()}</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
