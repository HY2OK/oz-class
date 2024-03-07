import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axios'

const MovieDetail = ({ isModalVisible, movie, closeModal }) => {
  if (!isModalVisible) return null

  const [details, setDetails] = useState(null)

  const type = movie.media_type === 'movie' || !movie.media_type ? 'movie' : 'tv'
  const movieDetailsPath = `/${type}/${movie.id}?append_to_response=credits`

  useEffect(() => {
    async function fetchDetails() {
      const res = await axiosInstance.get(movieDetailsPath)
      setDetails(res.data)
    }
    fetchDetails()
  }, [])

  return <Text>MovieDetail</Text>
}

export default MovieDetail

const styles = StyleSheet.create({})
