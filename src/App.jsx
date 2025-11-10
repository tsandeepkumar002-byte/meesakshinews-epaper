import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Epaper'
import Login from './Login'
import Dashboard from './Dashboard'

export default function App() {
  return (
    <div>
      <header className="site-header">
        <div className="container">
          <h1>MEE SAKSHI E-PAPER CMS</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container">© MEE SAKSHI</div>
      </footer>
    </div>
  )
}