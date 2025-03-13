import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://react-blog-backend-virid.vercel.app/api',
  headers: {
    'Content-Type': 'application/json'
  }
})