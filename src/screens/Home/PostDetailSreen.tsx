import Body from 'components/common/typo/Body'
import React from 'react'
import { View } from 'react-native'

interface IProps {
  route: {
    params: {
      body: string
    }
  }
}

const PostDetailScreen = ({ route }: IProps) => {
  const { body } = route.params

  return (
    <View>
      <Body size={24}>{body}</Body>
    </View>
  )
}

export default PostDetailScreen
