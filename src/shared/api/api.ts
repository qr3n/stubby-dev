import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://deploy-python-fastapi-in-vercel-qr3n-qr3ns-projects.vercel.app',
})