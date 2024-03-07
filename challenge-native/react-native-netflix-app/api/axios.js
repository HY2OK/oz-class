import axios from 'axios'
import { apiKey } from './key'

const instance = axios.create({
  baseURL: 'https://api.themovie.db.org/3',
  params: {
    api_key: apiKey,
    language: 'ko-KR',
  },
})

export default instance
