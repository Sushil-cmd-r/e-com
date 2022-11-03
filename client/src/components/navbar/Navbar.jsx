import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Close } from '../../assets/svgs'
import './navbar.scss'
import { AuthContext } from '../../context/'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState('false')
  const { auth, openLogin } = useContext(AuthContext)

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
          {
            !auth.user ? (
              <>
                <div className="nav-link">
                  <Link className='link' onClick={openLogin}>Log In</Link>
                </div>
                <div className="nav-link">
                  <Link className='link' onClick={openLogin}>Register</Link>
                </div>
              </>
            ) :
              <div className="nav-link">
                <Link className="link">Logged In</Link>
              </div>
          }
        </div>
      </div>
    </nav >
  )
}

export default Navbar