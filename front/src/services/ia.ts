import axios from 'axios'

export const ia = axios.create({
  baseURL: `${import.meta.env.VITE_IA_API_URL}/api/`,
})
