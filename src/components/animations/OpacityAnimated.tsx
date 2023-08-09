import React, { ReactNode, useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'

interface IProps {
  children: ReactNode
  delay?: number
  duration?: number
  style?: Object
}

const OpacityAnimated = (props: IProps) => {
  const { style, children, delay = 0, duration = 500 } = props
  const process = useSharedValue(0)

  useEffect(() => {
    process.value = withDelay(delay, withTiming(1, { duration }))
  }, [])

  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: process.value,
    }
  })

  return <Animated.View style={[rStyle, style]}>{children}</Animated.View>
}

export default OpacityAnimated
