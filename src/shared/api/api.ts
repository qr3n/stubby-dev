import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://dog-telegram.vercel.app',
})