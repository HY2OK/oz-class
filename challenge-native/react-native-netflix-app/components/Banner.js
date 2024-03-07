import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import axiosInstance from '../api/axios'

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const res = await axiosInstance.get(fetchUrl)
      setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)])
    }

    fetchData()
  }, [])

  console.log(movie)
  return <Text>Banner</Text>
}

export default Banner
