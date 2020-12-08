import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from '../components/contactform'

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>CONTACT</h1>
    <div><ContactForm /></div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
