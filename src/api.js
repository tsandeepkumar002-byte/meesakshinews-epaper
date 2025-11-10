import axios from 'axios'

export const API_BASE = 'https://epaper-meesakshinews-g19d.onrender.com'

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' }
})
