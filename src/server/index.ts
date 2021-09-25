import axios from 'axios'

export const apiKey = 'f1bc466ce200a460fee3a5da40133621'

const apiConfig = {
  baseURL: 'https://api.themoviedb.org/3',
}

export const api = axios.create(apiConfig)
