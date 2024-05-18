import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
      <div className='side-bar'>
      sidebar
      <Link to="/">Home</Link>
      <Link to="/src/pages/AboutPage.jsx">About</Link>
      </div>
  )
}

export default Sidebar