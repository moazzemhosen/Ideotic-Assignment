import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/l"><div>Login</div></Link>
        <Link to="/"><div>Breeds</div></Link>
        <div>Logout</div>
    </div>
  )
}

export default Navbar