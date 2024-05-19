import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
      <div className='side-bar'>
      <Link to="/">Home</Link>
      <div className="line-break"></div>
      <Link to="/src/pages/AboutPage.jsx">About</Link>
      </div>
  )
}

export default Sidebar