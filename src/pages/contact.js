import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import '../components/layout.css'

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
   
    <h1 style={{margin: `2rem`}}>Contact</h1>
    <p style={{margin: `2rem`}}>Email: <a href="mailto:adam-coppens@outlook.com">adam-coppens@outlook.com</a></p>
    <p style={{margin: `2rem`}}>LinkedIn: <a href="https://www.linkedin.com/in/adam-coppens-a44956190/"></a></p>
  </Layout>
)

export default ContactPage