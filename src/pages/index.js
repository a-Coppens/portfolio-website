import React from "react"
import Layout from "../components/layout"
import "../components/theme.css"
import PortfolioItem from "../components/portfolioItem"
import Seo from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="shapeContainer" style={{ height: "100%" }}>
      <Header></Header>
    </div>
    <h1 style={{ margin: `2rem` }}>Technologies</h1>
    <h2>Proficient languages: C#, Java, JavaScript, SQL</h2>
    <h2>Proficient Frameworks: .Net, Reacts.js, Java Spring</h2>
    <h2>Other Technologies: AWS, Unity Engine, Jenkins, Docker</h2>
    <h1 style={{ margin: `2rem` }}>Professional Experience</h1>

    <PortfolioItem
      title="Mediaocean"
      summary="Junior Software Developer - (June 2022 - Present)"
      desc="Full-stack MVC on Mediaocean's Ignitia"
      link="https://www.mediaocean.com/company"
    ></PortfolioItem>

    <PortfolioItem
      title="Seisma / National Australia Bank"
      summary="Graduate Consultant - (Aug 2021 - June 2022)"
      desc="Working on Enterprise Documents Services & Transaction Lifecycle Management"
      link="https://www.nab.com.au/"
    ></PortfolioItem>
  </Layout>
)

export default IndexPage
