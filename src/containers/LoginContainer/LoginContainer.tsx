import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ReactNode } from 'react'
import { View } from 'react-native'

import stylesConfig from './LoginContainer.style'
interface IProps {
  style?: object
  children: ReactNode
}

export const LoginContainer = ({ children }: IProps) => {
  const styles = useStyles(stylesConfig)

  return <View style={styles.container}>{children}</View>
}
