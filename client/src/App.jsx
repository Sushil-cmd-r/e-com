import './app.scss'
import { Route, Routes } from 'react-router-dom';
// Components
import { Navbar, Footer, Message } from './components'
// Pages
import { Auth, Home, Details, Create } from './pages'
// Context
import { useContext, useEffect } from 'react';
import { ModalContext, AuthContext } from './context';
import LoginModal from './components/modals/login/LoginModal';
// Hooks
import { useScrollLock } from './hooks/useScrollLock';

const App = () => {
  const { modalOpen } = useContext(ModalContext);
  const { loginModal } = useContext(AuthContext)
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    if (modalOpen || loginModal) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [loginModal, modalOpen, lockScroll, unlockScroll])

  return (
    <div className='app'>
      <Navbar />
      <div className="app-container">
        {/* Modals */}
        {modalOpen && <Message />}
        {loginModal && <LoginModal />}
        {/* Routes */}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/create' element={<Create />} />
          <Route path='/:id' element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App