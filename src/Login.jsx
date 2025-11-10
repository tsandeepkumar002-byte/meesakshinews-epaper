import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, loginUser } from "./api";

export default function Login(){
  const [email, setEmail] = useState('admin@meesakshinews.com')
  const [password, setPassword] = useState('Admin@123')
  const [err, setErr] = useState('')
  const nav = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setErr('')
    if(email === 'admin@meesakshinews.com' && password === 'Admin@123'){
      localStorage.setItem('ms_token','demo-token')
      nav('/dashboard')
      return
    }
    try{
      const res = await api.post('/auth/login',{email,password})
      if(res?.data?.token){
        localStorage.setItem('ms_token',res.data.token)
        nav('/dashboard')
        return
      }
    }catch(e){ }
    setErr('Invalid credentials — use admin@meesakshinews.com / Admin@123')
  }

  return (
    <div style={{maxWidth:480}} className="card">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-row"><label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} /></div>
        <div className="form-row"><label>Password</label><input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></div>
        {err && <div style={{color:'red',marginBottom:12}}>{err}</div>}
        <div><button className="btn">Login</button></div>
      </form>
    </div>
  )
}
