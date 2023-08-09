import { useStyles } from 'hooks/useStyles'
import React, { ReactNode } from 'react'
import { View } from 'react-native'

import stylesConfig from './Container.styles'

interface IProps {
  children: React.ReactElement | React.ReactElement[] | ReactNode
}

const Container = ({ children }: IProps) => {
  const styles = useStyles(stylesConfig)

  return <View style={styles.container}>{children}</View>
}

export default Container
