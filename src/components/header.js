import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="row">
      <div className="cell design">
        <Link to="/">THISISYOURHEAD<br />DESIGN WORK</Link>
      </div>
      <div className="cell contact">
        <Link to="/contact">CONTACT<br />FOR CUSTOM DESIGN</Link>
      </div>
      <div className="cell shop">
        <Link to="/shop">SHOP ONLINE<br />SOFT GOODS AND MATERIALS</Link>
      </div>
      <div className="cell cart">
        <Link to="/cart">CART<br />0 ITEMS</Link>
      </div>
    </div>
  </header>
)

export default Header
