import React from 'react'
import { Link } from 'react-router-dom';



 function Navbar() {


  return (
    <header>
        <div className='Navbar'>
        <nav >
          <ul className='navlink'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="/enrolled">Enrolled</Link></li> */}
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
    </div>
    </header>
    
  )
}

export default Navbar