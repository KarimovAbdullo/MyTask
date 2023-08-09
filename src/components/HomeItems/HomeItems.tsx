import Baner from 'components/Banner/Banner'
import Container from 'components/Container/Container'
import Products from 'components/Products/Products'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import stylesConfig from './HomeItems.style'

export const HomeItems = () => {
  const styles = useStyles(stylesConfig)
  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Container>
          <View style={styles.cotegoriesContent}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.colorButtonAdd}>New Tovar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.colorButtonSeeAll}>See All</Text>
            </TouchableOpacity>
          </View>
        </Container>

        <Products />

        <Baner />
      </View>

      <View style={styles.cart}>
        <Container>
          <View style={styles.cotegoriesContent}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.colorButtonAdd}>New Product</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.colorButtonSeeAll}>See All</Text>
            </TouchableOpacity>
          </View>
        </Container>

        <Products />
      </View>

      <View style={styles.cart}>
        <Container>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={require('assets/images/sam2.jpeg')}
            />
          </TouchableOpacity>

          <View style={styles.cotegoriesContent}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.colorButtonAdd}>All Product</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.colorButtonSeeAll}>See All</Text>
            </TouchableOpacity>
          </View>
        </Container>

        <Products />
      </View>

      <View style={styles.cart}>
        <Products />
      </View>
    </View>
  )
}
