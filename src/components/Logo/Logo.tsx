import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Logo = () => {
  return (
    <View style={styles.main}>
      <Image
        source={require('../../assets/images/pnn.png')}
        style={styles.image}
      />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  content: {},
  image: {
    width: 290,
    height: 190,
  },
  text: {
    color: 'black',
  },
  main: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
  },
})
