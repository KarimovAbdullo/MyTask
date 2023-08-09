import { TouchButton } from 'components/TouchButton/TouchButton'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'

import stylesConfig from './Categories.style'

export default function Categories() {
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

  const pressHendle = () => {}

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.itemsContent}
      keyExtractor={(item, index) => item.image + index}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchButton style={styles.imageContainer} onPress={pressHendle}>
            <Image source={item.image} style={styles.image} />
          </TouchButton>

          <TouchButton style={styles.textContainer} onPress={pressHendle}>
            <Text style={styles.text} numberOfLines={2}>
              {item.text}
            </Text>
          </TouchButton>
        </View>
      )}
    />
  )
}
