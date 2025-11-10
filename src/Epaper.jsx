import React, { useEffect, useState } from 'react'
import { fetchEditions } from './api'

export default function Epaper() {
  const [editions, setEditions] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetchEditions().then(data => {
      setEditions(data)
      setLoading(false)
    }).catch(e => { setErr(e.message); setLoading(false) })
  }, [])

  if (loading) return <p>Loading...</p>
  if (err) return <p>Error: {err}</p>

  return (
    <div>
      <h2>Today's Headlines — MEE SAKSHI</h2>
      <ul className="editions">
        {editions.map(e => (
          <li key={e.id} className="edition">
            <h3>{e.title}</h3>
            <p>{new Date(e.date).toLocaleString()}</p>
            <a href={e.pdfUrl} target="_blank" rel="noopener noreferrer">Open PDF</a>
          </li>
        ))}
      </ul>
    </div>
  )
}