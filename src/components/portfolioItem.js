import * as React from "react"
import "./layout.css"

const PortfolioItem = (props) => {
    return (
    <>
    <div id="portfolioItemDiv">
        <a href={props.link}><h2 className="portfolioText">{props.title}</h2></a>
        <hr style={{marginLeft: `0.5rem`}}></hr>
        <h3 className="portfolioText">{props.summary}</h3>
        <p className="portfolioText">{props.desc}</p>
    </div>
    </>
  )
}

export default PortfolioItem
