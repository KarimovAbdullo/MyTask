// import useAppDispatch from 'hooks/useAppDispatch'
import CustomButton from 'components/common/CustomButton'
import { Space } from 'components/common/Space'
import Body from 'components/common/typo/Body'
// import { Space } from 'components/common/Space'
// import Body from 'components/common/typo/Body'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useState } from 'react'
import {
  Button,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { addNewPost, getPostsAction } from 'state/posts/actions'
import { getPosts } from 'state/posts/selectors'
import {
  addNewPostFailure,
  addNewPostStart,
  addNewPostSuccess,
  deletePost,
} from 'state/posts/slice'

import EditPostForm from './EditPostForm'
import stylesConfig from './HomeScreen.styles'

const HomeScreen = () => {
  const { postData, loading } = useAppSelector(getPosts)
  const dispatch = useAppDispatch()
  console.log('dataaaa', postData)
  const [newPostTitle, setNewPostTitle] = useState('')
  const [editingPost, setEditingPost] = useState(null)
  const navigation = useSmartNavigation()

  const handleEditPost = (post: any) => {
    setEditingPost(post)
  }

  const handleCancelEdit = () => {
    setEditingPost(null)
  }

  useEffect(() => {
    dispatch(getPostsAction())
  }, [])

  const styles = useStyles(stylesConfig)

  const handleAddNewPost = async () => {
    if (newPostTitle.trim() !== '') {
      try {
        dispatch(addNewPostStart())
        const response = await dispatch(addNewPost({ title: newPostTitle }))
        dispatch(addNewPostSuccess(response.payload))
        setNewPostTitle('')
      } catch (error) {
        //@ts-ignore
        dispatch(addNewPostFailure(error.toString()))
      }
    }
  }

  const handleDeletePost = (postId: number) => {
    dispatch(deletePost(postId))
  }

  const handlePostPress = async (body: string) => {
    //@ts-ignore
    navigation.navigate('PostDetailScreen', { body })
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter new post title"
          value={newPostTitle}
          onChangeText={text => setNewPostTitle(text)}
        />
        <CustomButton text="Добавить пост" onPress={handleAddNewPost} />

        {loading ? (
          <Body>LOADING...</Body>
        ) : (
          <View>
            {editingPost ? (
              <EditPostForm post={editingPost} onCancel={handleCancelEdit} />
            ) : (
              <FlatList
                data={postData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.main}
                    onPress={() => handlePostPress(item.body)}>
                    <Body center size={22}>
                      {item.title}
                    </Body>

                    <Space height={10} />

                    <Button title="Edit" onPress={() => handleEditPost(item)} />
                    <Space height={5} />
                    <Button
                      title="Delete"
                      color={'red'}
                      onPress={() => handleDeletePost(item.id)}
                    />

                    <Space height={22} />
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        )}
      </View>
    </ScrollView>
  )
}

export default HomeScreen
