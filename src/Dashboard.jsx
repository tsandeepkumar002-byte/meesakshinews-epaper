import React, { useState } from 'react'
import { uploadEdition } from './api'

export default function Dashboard(){
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [msg, setMsg] = useState('')

  async function handleUpload(e){
    e.preventDefault()
    if(!file) return setMsg('Select a pdf')
    const token = localStorage.getItem('ms_token')
    const fd = new FormData()
    fd.append('file', file)
    fd.append('title', title)
    try{
      await uploadEdition(fd, token)
      setMsg('Uploaded')
    }catch(err){
      setMsg('Upload failed: ' + err.message)
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <form onSubmit={handleUpload} className="form">
        <label>Title<input value={title} onChange={e=>setTitle(e.target.value)} /></label>
        <label>PDF File<input type="file" accept="application/pdf" onChange={e=>setFile(e.target.files[0])} /></label>
        <button type="submit">Upload edition</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}