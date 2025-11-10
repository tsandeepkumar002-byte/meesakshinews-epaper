import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard(){
  const nav = useNavigate()
  const logout = ()=>{ localStorage.removeItem('ms_token'); nav('/login') }
  return (
    <div>
      <div className="card">
        <h2>Dashboard</h2>
        <p>Welcome, admin. This is a starting point for CMS features (upload PDFs, manage ads).</p>
        <p><button className="btn" onClick={logout}>Logout</button></p>
      </div>
    </div>
  )
}
