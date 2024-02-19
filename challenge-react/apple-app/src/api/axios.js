import axios from 'axios'
import { apiKey } from './key'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    apiKey: apiKey,
    language: 'ko-KR',
  },
})

export default instance
