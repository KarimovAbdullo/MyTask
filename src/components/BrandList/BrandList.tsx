import Hr from 'components/Hr'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './BrandList.style'

export const BrandList = () => {
  const styles = useStyles(stylesConfig)
  const [brands] = useState([
    { text: 'Samsung', image: require('assets/images/1.png') },
    { text: 'Iphone', image: require('assets/images/1.png') },
    { text: 'Nokia', image: require('assets/images/1.png') },
    { text: 'Redmi', image: require('assets/images/1.png') },
  ])

  return (
    <FlatList
      data={brands}
      ItemSeparatorComponent={Hr}
      keyExtractor={(item, index) => item.text + index}
      renderItem={({ item }) => (
        <View style={styles.listContent}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.image} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>{item.text}</Text>
          </View>

          <TouchableOpacity style={styles.iconContainer}>
            <R.icons.RightIcon size={25} />
          </TouchableOpacity>
        </View>
      )}
    />
  )
}
