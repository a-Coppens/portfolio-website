import * as React from "react"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css"
import armadilloVideo from "../../src/assets/Armadillo.mp4"

const Art = () => (
  <Layout>
    <Seo title="Art" />

    <h1 style={{ margin: `2rem` }}>Art</h1>
    <div>
      <h2 class="artHeading">Armadillo Unreal Engine Render</h2>
      <ReactPlayer
        url={armadilloVideo}
        playing={false}
        controls={true}
        style={{
          backgroundColor: `transparent`,
          textAlign: `center`,
          display: `inline-flex`,
          margin: `2rem`,
        }}
      />
    </div>
  </Layout>
)

export default Art
