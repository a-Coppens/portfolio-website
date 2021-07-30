import * as React from "react"
import "./layout.css"
import {GiHamburgerMenu} from "react-icons/gi"

import { Link } from "gatsby"

const Navbar = () => {
    
    return (
    <>
    <nav className="navbar">
            <ul className="navbar-nav">
                
                <li className="navbar-item"><Link to="../../portfolio-website" className="navAnchor">Home</Link></li>
                
                <li className="navbar-item"><Link to="../../portfolio-website/contact" className="navAnchor">Contact</Link></li>
                <li className="navbar-item"><Link to="../../portfolio-website/art" className="navAnchor">3D Art</Link></li>
                <li className="navbar-item"><Link to="../../portfolio-website/music" className="navAnchor">Music</Link></li>
            </ul>
    </nav>
    </>
  )
}

export default Navbar
