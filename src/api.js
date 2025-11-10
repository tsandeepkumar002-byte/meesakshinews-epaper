export const BACKEND_URL = 'https://epaper-meesakshinews-g19d.onrender.com'

export async function fetchEditions() {
  const res = await fetch(`${BACKEND_URL}/editions`)
  if (!res.ok) throw new Error('Failed to fetch editions')
  return res.json()
}

export async function uploadEdition(formData, token) {
  const res = await fetch(`${BACKEND_URL}/editions`, {
    method: 'POST',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData
  })
  if (!res.ok) throw new Error('Upload failed')
  return res.json()
}

export async function loginApi(email, password) {
  const res = await fetch(`${BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  if (!res.ok) throw new Error('Login failed')
  return res.json()
}