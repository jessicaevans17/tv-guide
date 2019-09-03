import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <main className="webpage-header">
        <div className="tv-item-info">
          <img
            className="icon"
            src="https://images.vexels.com/media/users/3/128877/isolated/preview/b012e0730a5f9c0c4566d887bbed95d1-television-flat-icon-by-vexels.png"
          />
          <header className="webpage-header-title center">TV Shows!!!</header>
        </div>
        <nav className="center home">
          <Link to="/">Home</Link>
        </nav>
      </main>
    </>
  )
}

export default Header
