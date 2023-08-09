import Hr from 'components/Hr'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'

import stylesConfig from './CategoriesList.style'

export const CategoriesList = () => {
  const styles = useStyles(stylesConfig)
  const [categories] = useState([
    { text: 'Наушники', image: require('assets/images/1.png') },
    { text: 'Чехлы', image: require('assets/images/1.png') },
    { text: 'Планшеты', image: require('assets/images/1.png') },
    { text: 'Аксессуары', image: require('assets/images/1.png') },
    { text: 'Зарядные устройства', image: require('assets/images/1.png') },
    { text: 'Смартфоны', image: require('assets/images/1.png') },
    { text: 'Гаджеты', image: require('assets/images/1.png') },
    { text: 'Бренды', image: require('assets/images/1.png') },
    { text: 'Гаджеты', image: require('assets/images/1.png') },
    { text: 'Гаджеты', image: require('assets/images/1.png') },
  ])

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        numColumns={2}
        columnWrapperStyle={styles.itemContent}
        ItemSeparatorComponent={Hr}
        keyExtractor={(item, index) => item.text + index}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listContent}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={item.image} />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
