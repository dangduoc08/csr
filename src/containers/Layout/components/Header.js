import React from 'react'
import { Link } from 'react-router-dom'
import { layoutLinks } from '../../../routers'

function Header() {
  return (
    <div className='header'>
      <div className='header__nav'>
        {layoutLinks.map(link =>
          <Link to={link.to} key={link.key} className='header__nav-item'>
            {link.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header