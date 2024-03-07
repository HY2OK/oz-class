import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const AddWatchListButton = () => {
  return (
    <Pressable>
      <View style={styles.playButton}>
        <Icon name="plus" size={24} color="#fcffff" />
        <Text style={styles.buttonText}>Add Watch</Text>
      </View>
    </Pressable>
  )
}

export default AddWatchListButton

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: '#171717',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  buttonText: {
    color: '#fcffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
