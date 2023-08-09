import React, { ReactNode, useEffect } from 'react'
import { ViewProps } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated'

interface IProps extends ViewProps {
  children?: ReactNode
  delay?: number
  initialX?: number
  initialY?: number
  value?: number
  style?: object
}

const TransformAnimated = (props: IProps) => {
  const {
    children,
    delay = 0,
    initialX = 0,
    initialY = 0,
    value,
    style,
  } = props
  const process = useSharedValue(0)

  useEffect(() => {
    process.value = withDelay(delay, withSpring(value === 0 ? 0 : 1))
  }, [value])

  const rStyle = useAnimatedStyle(() => {
    const translateY = interpolate(process.value, [0, 1], [initialY, 0])
    const translateX = interpolate(process.value, [0, 1], [initialX, 0])
    return {
      transform: [{ translateY: translateY }, { translateX: translateX }],
    }
  })

  return <Animated.View style={[style, rStyle]}>{children}</Animated.View>
}

export default TransformAnimated
