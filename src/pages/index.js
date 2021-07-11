import React from "react"
import Layout from "../components/layout"
import "../components/theme.css"
import PortfolioItem  from "../components/portfolioItem"
import Seo from "../components/seo"

const IndexPage = () => (
 
  
    <Layout>
      <Seo title="Home" />
      <h1 style={{margin: `2rem`}}>Technologies</h1>
        <h2>Proficient languages: C#, C++, Java, JavaScript, SQL</h2>
        <h2>Proficient Frameworks: .Net, Reacts.js, Node.js</h2>
        <h2>Other Technologies: Microsoft Azure, Unity Engine, Git, Docker</h2>
      <h1 style={{margin: `2rem`}}>Development Portfolio</h1>
        <p>*Note: more to be added</p>
        <PortfolioItem title="PHP-SREPS" summary="Peoples Health Pharmacy, mock Sales System" 
                      desc="My first full stack team based project through university, whilst the project itself isn't implemented the best the experience was invaluable."
                      link="https://github.com/a-Coppens/PHP-SRePS">
        </PortfolioItem>

        <PortfolioItem title="Client Project" summary="Decision Support System" 
                      desc="University based project developing a decision support system for a government agency. Source code unavailable to be shown">
        </PortfolioItem>
     
      <p>
        <a href="https://github.com/a-Coppens/portfolio-website">GitHub Repo</a>
      </p>
    </Layout>


)

export default IndexPage
