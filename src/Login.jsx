import React, { useState } from 'react'
import { loginApi } from './api'

export default function Login() {
  const [email, setEmail] = useState('admin@meesakshinews.com')
  const [password, setPassword] = useState('Admin@123')
  const [msg, setMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = await loginApi(email, password)
      localStorage.setItem('ms_token', data.token || JSON.stringify(data))
      setMsg('Login successful. Go to Dashboard.')
    } catch (err) {
      setMsg('Login failed: ' + err.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} /></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}