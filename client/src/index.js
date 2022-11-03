import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss'
import App from './App'

import { ModalProvider, AuthProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <Router>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </Router>
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
)