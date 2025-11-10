import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App(){
  return (
    <div>
      <header className="header">
        <div className="container header-inner">
          <div className="brand-block">
            <div className="logo-placeholder">M</div>
            <div>
              <h1 className="brand">MEE SAKSHI</h1>
              <div className="tagline">E-PAPER CMS</div>
            </div>
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </nav>
        </div>
      </header>

      <div className="top-banner">
        <div className="container banner-inner">Today's Headlines — MEE SAKSHI</div>
      </div>

      <main className="container main-content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">© MEE SAKSHI</div>
      </footer>
    </div>
  )
}
