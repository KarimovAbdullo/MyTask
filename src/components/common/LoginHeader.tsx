import BackIcon from 'assets/icons/BackIcon'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScaledSheet } from 'react-native-size-matters/extend'

export default function LoginHeader() {
  const safeAreaInsets = useSafeAreaInsets()

  return (
    <TouchableOpacity
      style={[styles.container, { marginTop: safeAreaInsets.top + 26 }]}>
      <BackIcon />
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  container: {
    // width: '100%',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: 20,
  },
})
