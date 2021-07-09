import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <div className="dark" style={{height: "100%"}}>
  <Layout>
    <Seo title="Home" />
   
    <h1 style={{margin: `1rem`}}>Contact</h1>
    <p style={{margin: `1rem`}}>Email: <a href="mailto:adam-coppens@outlook.com">adam-coppens@outlook.com</a></p>
    <p style={{margin: `1rem`}}>LinkedIn: <a href="https://www.linkedin.com/in/adam-coppens-a44956190/">https://www.linkedin.com/in/adam-coppens-a44956190/</a></p>
  </Layout>
  </div>
)

export default ContactPage