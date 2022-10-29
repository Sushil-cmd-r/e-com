import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Close } from '../../assets/svgs'
import './navbar.scss'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState('false')

  return (
    <nav className='nav'>
      <div className="nav-left">
        <Link to='/' className='link'>
          LOGO
        </Link>
      </div>
      <div className="nav-right">
        <span className='nav-toggle' onClick={() => setToggleMenu(prev => !prev)}>
          {toggleMenu ? <Menu /> : <Close />}
        </span>
        <div className={`nav-links ${!toggleMenu ? 'active' : ''}`}>
          <div className="nav-link">
            <a href='#products' className='link'>Explore</a>
          </div>
          <div className="nav-link">
            <Link to='/create' className='link'>Create</Link>
          </div>
          <div className="nav-link">
            <Link to='/list' className='link'>Log In</Link>
          </div>
          <div className="nav-link">
            <Link to='/list' className='link'>Register</Link>
          </div>
        </div>
      </div>
    </nav >
  )
}

export default Navbar