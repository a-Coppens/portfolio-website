import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/layout.css"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />

    <h1 style={{ margin: `2rem` }}>Blog</h1>
    <p style={{ margin: `2rem` }}>
      Welcome to my Personal Blog. Here you will find tech musings, Work from
      home tips and more!
    </p>
  </Layout>
)

export default BlogPage
