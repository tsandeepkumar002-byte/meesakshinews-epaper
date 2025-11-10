// src/api.js
import axios from "axios";

export const BASE_URL = "https://epaper-meesakshinews-g19d.onrender.com";

export const api = axios.create({
  baseURL: BASE_URL,
});

// Example function for login
export async function loginUser(email, password) {
  try {
    const res = await api.post("/login", { email, password });
    return res.data;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
}

// Example function to get editions (for dashboard or home)
export async function getEditions() {
  try {
    const res = await api.get("/editions");
    return res.data;
  } catch (err) {
    console.error("Get editions error:", err);
    throw err;
  }
}
