import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="row">
      <div className="cell design">
        <Link to="/">THISISYOURHEAD<br />DESIGN WORK</Link>
      </div>
      <div className="cell contact">
        <a href="mailto:thisisyourhead@gmail.com">CONTACT<br />FOR CUSTOM DESIGN</a>
      </div>
    </div>

    <p style={{ paddingLeft: '10px' }}>Trashy artist based in Napa, Calfornia</p>
  </header>
)

export default Header
