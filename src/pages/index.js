import React from "react"
import Projects from '../components/projects'

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <p style={{ paddingLeft: '10px' }}>Multidisciplinary artist based in Napa, Calfornia</p>

      <Projects />


  </Layout>
)

export default IndexPage
