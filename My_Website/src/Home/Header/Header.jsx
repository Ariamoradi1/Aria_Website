import React from "react";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {

  return(
    <>
    <nav>
    <ul>
      <Link to='/'><li>Home</li></Link>
      <Link to='/Service'> <li>Service</li></Link>
     <Link to='/Contact Us'> <li>Contact Us</li></Link>
    </ul>

    
    </nav>
    
    </>
  )


}



export default Header