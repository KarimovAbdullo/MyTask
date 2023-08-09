import React, { ReactNode, useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated'

interface IProps {
  children: ReactNode
  delay?: number
  value?: number
}

const ScaleAnimated = (props: IProps) => {
  const { children, delay = 0, value } = props
  const process = useSharedValue(0)

  useEffect(() => {
    process.value = withDelay(delay, withSpring(value === 0 ? 0 : 1))
  }, [])

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: process.value }],
    }
  })

  return <Animated.View style={[rStyle]}>{children}</Animated.View>
}

export default ScaleAnimated
