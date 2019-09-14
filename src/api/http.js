import axios from 'axios'

const axiosCreate = axios.create({
  baseURL: 'https://5cbef81d06a6810014c66193.mockapi.io/api',
  timeout: 5000,
  withCredentials: true
})

export const HTTP = axiosCreate