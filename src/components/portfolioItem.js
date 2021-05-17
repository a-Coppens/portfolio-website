import * as React from "react"
import "./layout.css"

const PortfolioItem = (props) => {
    console.log(props)
    return (
    <>
    <div id="portfolioItemDiv">
        <h2 className="portfolioText">{props.title}</h2>
        <h3 className="portfolioText">{props.summary}</h3>
        <p className="portfolioText">{props.desc}</p>
    </div>
    </>
  )
}

export default PortfolioItem
