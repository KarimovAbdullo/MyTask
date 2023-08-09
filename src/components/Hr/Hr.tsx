import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { View } from 'react-native'
import { TThemeColors } from 'res/theme'

import stylesConfig from './Hr.styles'

interface IProps {
  text?: string | string[]
  textColor?: keyof TThemeColors
  style?: object
}

const Hr = ({ style, text }: IProps) => {
  const styles = useStyles(stylesConfig)

  return text ? (
    <View style={[styles.hrWithText, style]}>
      <View style={[styles.hr, styles.hrText]} />

      <View style={[styles.hr, styles.hrText]} />
    </View>
  ) : (
    <View style={[styles.hr, style]} />
  )
}

export default Hr
