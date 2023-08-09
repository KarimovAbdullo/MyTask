import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TouchableOpacity } from 'react-native'

import Typo from '../typo'
import stylesConfig from './CustomButton.styles'

interface IProps {
  onPress?: (() => void) | undefined
  text: string

  style?: object
  textStyle?: object
}

export const CustomButton = ({ onPress, text, style, textStyle }: IProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Typo.Body size={18} color="white" style={[styles.text, textStyle]}>
        {text}
      </Typo.Body>
    </TouchableOpacity>
  )
}
