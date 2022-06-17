import * as React from "react"
import "./layout.css"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <Link to="/" className="navAnchor">
            <li className="navbar-item">Home </li>
          </Link>

          <Link to="/blog" className="navAnchor">
            <li className="navbar-item"> Blog</li>
          </Link>

          <Link to="/art" className="navAnchor">
            <li className="navbar-item">3D Art</li>
          </Link>

          <Link to="/music" className="navAnchor">
            <li className="navbar-item">Music</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
