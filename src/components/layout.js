/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

function backToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main style={{ padding: '10px' }}>{children}</main>

        <div role="button" tabIndex={0} className="back-to-top" onClick={backToTop} onKeyDown={backToTop}>back_to_top</div>
        <footer style={{ padding: '10px' }}>
          © {new Date().getFullYear()}, Thanks a bunch
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
