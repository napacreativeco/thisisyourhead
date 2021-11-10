/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import styled from 'styled-components'

import Header from "./header"
import "./layout.css"

const LoadingStyles = styled.div`
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background:#e5e5e5;
    height: 100vh;
    width: 100vw;
    z-index: 99999;
`;

function backToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


const Layout = ({ children }) => {

  const [loading, setLoading] = useState('1');
  const [loaded, setLoaded] = useState('flex');

  useEffect(() => {
    setTimeout(() => {
        setLoading('0');
        setLoaded('none');
      }, 1000);
  }, []);


  return (
    <>

      <LoadingStyles className="preloader" style={{ 'opacity': `${loading}`, 'display': `${loaded}` }}>
          LOADING
      </LoadingStyles>

      <Header />

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

export default Layout
