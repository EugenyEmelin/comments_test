import axios from 'axios'

const axiosCreate = axios.create({
    baseURL: 'http://localhost:8080',
  timeout: 5000,
  withCredentials: true
})

export const HTTP = axiosCreate