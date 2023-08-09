import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function BrandItems() {
  const categories = ['Smart watch', 'Casio', 'Tissot', 'Seiko']
  const [categorieIndex, setCategoriesIndex] = useState(0)
  return (
    <View style={styles.categories}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setCategoriesIndex(index)}
          activeOpacity={0.8}>
          <Text
            style={[
              styles.tekst,
              categorieIndex === index && styles.categoriesTextSelected,
            ]}
            key={index}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    // justifyContent: 'space-between',
  },
  tekst: {
    color: 'black',
    borderBottomColor: 'blue',
    marginRight: 30,
  },
  categoriesTextSelected: {
    color: 'blue',
    paddingBottom: 10,
    borderBottomWidth: 2,
    marginRight: 30,
  },
})
