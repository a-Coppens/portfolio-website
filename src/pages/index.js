import React, { useState, createContext } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import "../components/theme.css"

import PortfolioItem  from "../components/portfolioItem"
import Seo from "../components/seo"
import Topbar from "../components/topbar"


const IndexPage = () => (
 
   <div className="dark" style={{height: "100%"}}>
    <Topbar></Topbar>
    <Layout>
      <Seo title="Home" />
      <h1 style={{margin: `2rem`}}>Development Portfolio</h1>
      <PortfolioItem title="Test Component Prop Title" summary="Test Component Prop Summary" 
                    desc="Test Component Prop Desc">
      </PortfolioItem>

      <PortfolioItem title="Test Component2 Prop Title" summary="Test Component2 Prop Summary" 
                     desc="Test Component2 Prop Desc">
      </PortfolioItem>
      
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  </div>

)

export default IndexPage
