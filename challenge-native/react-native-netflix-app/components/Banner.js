import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import axiosInstance from '../api/axios'
import PlayButton from './PlayButton'
import AddWatchListButton from './AddWatchListButton'

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const res = await axiosInstance.get(fetchUrl)
      setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)])
    }

    fetchData()
  }, [])

  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <View style={styles.bannerContainer}>
      <Image
        source={{ uri: `${BASE_URL}${movie?.poster_path || movie?.backdrop_path}` }}
        style={{
          width: '100%',
          height: 450,
          marginHorizontal: 10,
          borderRadius: 15,
          borderColor: '#3f3f45',
          objectFit: 'cover',
        }}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PlayButton />
        </View>
        <View style={styles.button}>
          <AddWatchListButton />
        </View>
      </View>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
  bannerContainer: {
    marginTop: 15,
    position: 'relative',
    width: '100%',
    height: 450,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    padding: 5,
    bottom: 0,
  },
  button: {
    flex: 1,
    margin: 5,
  },
})
