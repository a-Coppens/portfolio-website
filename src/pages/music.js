import React from "react"
import ReactPlayer from "react-player"

import Layout from "../components/layout"
import Seo from "../components/seo"
import witcherCover from "../../src/assets/WolfAndSwallow.mp3"
import sadboio from "../../src/assets/sadboio.mp3"
import moodyPiano from "../../src/assets/moody.wav"
import blockades from "../../src/assets/ImprovedBlockades.mp3"
import melancholy from "../../src/assets/myfav.wav"
import "../components/layout.css"

const Music = () => (
  <Layout>
    <Seo title="Music" />

    <h1 style={{ margin: `2rem` }}>Music Clips</h1>
    {/*TODO: Make into a Component */}
    <h2>Moody Piano for a rainy day</h2>
    <ReactPlayer
      url={moodyPiano}
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
    <h2>Muse - Blockades short cover</h2>
    <ReactPlayer
      url={blockades}
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
    <h2>Melancholy Guitar</h2>
    <ReactPlayer
      url={melancholy}
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
    <h2>Generic Ambient Electronic</h2>
    <ReactPlayer
      url={sadboio}
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
    <h2>Witcher 3 Cover</h2>
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
