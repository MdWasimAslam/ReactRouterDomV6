import React from 'react'
import { Link } from 'react-router-dom'
import "./Styles/Navbar.css";



function NavBar() {
  return (
    <div>
       <ul>
  <li><Link className={'active'} to={"/"}>Home</Link></li>
  <li><Link to={"/about"}>About</Link></li>
 
</ul>
    </div>
  )
}

export default NavBar