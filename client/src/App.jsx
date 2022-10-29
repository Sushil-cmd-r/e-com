import './app.scss'
import { Route, Routes } from 'react-router-dom';
// Components
import { Navbar, Footer } from './components'
// Pages
import { Auth, Home, Details, Create } from './pages'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <div className="app-container">
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