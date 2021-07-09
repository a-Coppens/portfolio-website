import * as React from "react"
import "./layout.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMoonOutline, IoMoon} from "react-icons/io5"
import { Link } from "gatsby"

const Navbar = () => {
    
    return (
    <>
    <div>
        <div id="navDiv">
            <div style={{display: "inline-block"}}>
                <IoMoonOutline style={{float: "left", marginLeft: "1rem"}}></IoMoonOutline>
                <p style={{float: "left", marginLeft: "1rem"}}>(Site is heavily WIP)</p>
            </div>
            
            <h1 className="aboutMe">Adam Coppens</h1>
            <h2 className="aboutMe">Software Developer, 3D Artist, Musician</h2>
            <div className="aboutMe">
                <ul>
                    
                    <li><Link to="../portfolio-website" className="navAnchor">Home</Link></li>
                    
                    <li><Link to="../portfolio-website/contact" className="navAnchor">Contact</Link></li>
                    <li>3D Art</li>
                    <li>Music</li>
                </ul>
            </div>
        </div>
        <hr></hr>
    </div>

    </>
  )
}

export default Navbar
