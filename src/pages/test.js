import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsAlt from '../components/projectsAlt'

const Test = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>CONTACT</h1>
    <div><ProjectsAlt /></div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Test
