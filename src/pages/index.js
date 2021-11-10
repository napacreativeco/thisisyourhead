import React from "react"
import Layout from "../components/layout"
import ProjectsNew from '../components/projectsNew'
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <ProjectsNew />

  </Layout>
)

export default IndexPage
