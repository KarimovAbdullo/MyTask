import { LoginButton } from 'components/FormButton/FormButton'
import { TouchButton } from 'components/TouchButton/TouchButton'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'

import stylesConfig from './Products.style'

export default function Products() {
  const styles = useStyles(stylesConfig)

  const [products] = useState([
    {
      img: require('assets/images/33.png'),
      text: 'Foods',
    },
    { img: require('assets/images/33.png'), text: 'Gift' },
    { img: require('assets/images/33.png'), text: 'Fashion' },
    { img: require('assets/images/33.png'), text: 'Garget' },
    { img: require('assets/images/33.png'), text: 'Comp' },
    { img: require('assets/images/33.png'), text: 'Comp' },
    { img: require('assets/images/33.png'), text: 'Comp' },
  ])

  const onPress = () => {}

  return (
    <FlatList
      data={products}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.itemsContent}
      keyExtractor={(item, index) => item.img + index}
      renderItem={({ item }) => (
        <View style={styles.contener}>
          <TouchButton onPress={onPress}>
            <View style={styles.imageContainer}>
              <Image source={item.img} style={styles.image} />
            </View>

            <View style={styles.textContener}>
              <Text style={styles.colorItemText} numberOfLines={2}>
                {item.text}
              </Text>

              <View style={styles.text}>
                <Text style={styles.colorPriseText}>1000 $</Text>
              </View>
            </View>
          </TouchButton>

          <View style={styles.buttonContainer}>
            <LoginButton
              text="В корзину"
              style={styles.button}
              onPress={onPress}
            />
          </View>
        </View>
      )}
    />
  )
}
