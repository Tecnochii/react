import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/personajes">Personajes</Link>
      <Link to="/casas">Casas</Link>
    </div>
  )
}

export default Nav
