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
      <div className="cell shop" style={{ 'cursor': 'not-allowed' }}>
        <Link to="/shop">SHOP ONLINE<br />COMING SOON</Link>
      </div>
      <div className="cell cart">
        <Link to="/cart">CART<br />0 ITEMS</Link>
      </div>
    </div>

    <p style={{ paddingLeft: '10px' }}>Multidisciplinary artist based in Napa, Calfornia</p>
  </header>
)

export default Header
