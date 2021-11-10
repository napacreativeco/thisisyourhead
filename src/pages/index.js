import React from "react"
import ProjectsNew from '../components/projectsNew'

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

      <ProjectsNew />

  </Layout>
)

export default IndexPage
