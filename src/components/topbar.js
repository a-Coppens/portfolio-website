import * as React from "react"
import "./layout.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {IoMoonOutline, IoMoon} from "react-icons/io5"

const Topbar = () => {
    return (
    <>
        <div>
            <IoMoonOutline style={{float: "left", margin: "1rem"}}></IoMoonOutline>
            <p style={{float: "left", marginTop: "1rem"}}>(WIP)</p>
            <p style={{float: "right", marginTop: "1rem"}}>(WIP)</p>
            <GiHamburgerMenu style={{float: "right", margin: "1rem"}}></GiHamburgerMenu>
        </div>
    </>
  )
}

export default Topbar


