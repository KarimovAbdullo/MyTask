// import { Space } from 'components/common/Space'
// import Typo from 'components/common/typo'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, ReactNode, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Collapsible from 'react-native-collapsible'
import R from 'res'

import stylesConfig from './CollapseInfo.style'

interface IProps {
  label: string
  children: ReactElement | ReactNode
  height?: number
  icon?: ReactNode
  border?: boolean
  style?: object
  titleAlignCenter?: boolean
}

export const CollapseInfo = (props: IProps) => {
  const {
    children,
    icon,
    border = true,
    style,
    titleAlignCenter = true,
  } = props
  const styles = useStyles(stylesConfig)
  const [open, setOpen] = useState(false)

  const onLabelPress = () => {
    setOpen(!open)
  }

  return (
    <View style={[border && styles.border, style]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onLabelPress}
        style={[styles.header, titleAlignCenter && styles.alignCenter]}>
        <View style={styles.row}>{icon}</View>

        <R.icons.HomeIcon />
      </TouchableOpacity>

      {/*@ts-ignore*/}
      <Collapsible collapsed={!open}>{children}</Collapsible>
    </View>
  )
}
