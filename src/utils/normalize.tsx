import { Dimensions } from 'react-native'
import normalize from 'react-native-normalize'

export function n(value, scale = false) {
  const { fontScale } = Dimensions.get('window')
  return normalize(value / (scale ? fontScale : 1))
}
