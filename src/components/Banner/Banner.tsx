import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { FlatList, Image, View } from 'react-native'

import stylesConfig from './Banner.style'

export default function Baner() {
  const styles = useStyles(stylesConfig)
  const [baners] = useState([
    { img: require('assets/images/h.jpg') },
    { img: require('assets/images/h.jpg') },
    { img: require('assets/images/h.jpg') },
    { img: require('assets/images/h.jpg') },
    { img: require('assets/images/h.jpg') },
    { img: require('assets/images/h.jpg') },
  ])

  return (
    <View style={styles.body}>
      <FlatList
        data={baners}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.itemList}
        keyExtractor={(item, index) => item.img + index}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.img} style={styles.image} />
          </View>
        )}
      />
    </View>
  )
}
