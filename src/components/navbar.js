import * as React from "react"
import "./layout.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMoonOutline, IoMoon} from "react-icons/io5"

const Navbar = () => {
    
    return (
    <>
    <div>
        <div id="navDiv">
            <h1 className="aboutMe">Adam Coppens</h1>
            <h2 className="aboutMe">Developer, 3D Artist, Musician</h2>
            <div className="aboutMe">
                <ul>
                    <li><a href="/" className="navAnchor">Home</a></li>
                    <li>Portfolio</li>
                    <li><a href="/contact" className="navAnchor">Contact</a></li>
                    <li>3D art</li>
                    <li>Music</li>
                </ul>
            </div>
        </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Navbar
