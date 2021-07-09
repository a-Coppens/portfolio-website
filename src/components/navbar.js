import * as React from "react"
import "./layout.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMoonOutline, IoMoon} from "react-icons/io5"

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
                    <li><a href="../../portfolio-website" className="navAnchor">Home</a></li>
                    {/*<li>Portfolio</li>*/}
                    <li><a href="contact" className="navAnchor">Contact</a></li>
                    <li>3D art</li>
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
