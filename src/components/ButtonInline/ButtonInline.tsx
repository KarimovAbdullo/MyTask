import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

import stylesConfig from './ButtonInline.style'

interface IProps {
  text: string | string[]
  onPress: () => void
  style?: object
  icon: ReactNode
}

export const PaperButton = ({ onPress, icon, text }: IProps) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()

  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor={colors.iconLine}
      style={styles.container}>
      <View style={styles.content}>
        <View style={styles.icon}>{icon}</View>

        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableRipple>
  )
}
