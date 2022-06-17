import React from "react"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import Seo from "../components/seo"
import witcherCover from "../../src/assets/WolfAndSwallow.mp3"
import "../components/layout.css"

const Music = () => (
  <Layout>
    <Seo title="Music" />

    <h1 style={{ margin: `2rem` }}>Music</h1>
    {/*TODO: Make into a Component */}
    <ReactPlayer
      url={witcherCover}
      width="400px"
      height="50px"
      playing={false}
      controls={true}
      style={{
        backgroundColor: `transparent`,
        textAlign: `center`,
        display: `inline-flex`,
        margin: `2rem`,
      }}
    />
  </Layout>
)

export default Music
