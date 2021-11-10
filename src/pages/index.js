import React from "react"
import Projects from '../components/projectsNew'

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <Projects />

  </Layout>
)

export default IndexPage
