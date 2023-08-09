import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TextInput, View } from 'react-native'

import SearchIcon from '../../assets/icons/SearchIcon'
import StyleConfig from './StyleConfig'
const Search = () => {
  const styles = useStyles(StyleConfig)
  return (
    <View style={styles.cart}>
      <TextInput
        placeholder="search Product name"
        placeholderTextColor="#C4C5C4"
        style={styles.input}
      />
      <SearchIcon />
    </View>
  )
}

export default Search
