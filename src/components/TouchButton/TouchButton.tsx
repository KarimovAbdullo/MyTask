import React from 'react'
import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

interface IProps {
  onPress: () => void
  style?: object
  children: ReactNode
}

export const TouchButton = ({ children, onPress, style }: IProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  )
}
