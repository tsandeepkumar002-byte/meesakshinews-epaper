import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import something from "./api";

export default function Home(){
  const [status, setStatus] = useState('Checking...')
  useEffect(()=>{
    api.get('/api/health')
      .then(()=> setStatus('✅ Backend Running'))
      .catch(()=> setStatus('❌ Backend Unreachable'))
  },[])
  return (
    <div className="grid">
      <div>
        <div className="card">
          <h2>Top stories</h2>
          <p>Sample headline: Local paper publishes new edition.</p>
          <p>Sample headline: Community events this weekend.</p>
          <p><Link className="btn" to="/login">Go to Login</Link></p>
        </div>
        <div style={{marginTop:16}} className="card">
          <h3>Latest Editions</h3>
          <ul>
            <li>2025-11-09 - PDF</li>
            <li>2025-11-08 - PDF</li>
          </ul>
        </div>
      </div>
      <aside className="side">
        <div className="card">
          <h4>About</h4>
          <p>MEE SAKSHI - Regional news portal demo.</p>
          <p>Backend status: {status}</p>
        </div>
      </aside>
    </div>
  )
}
