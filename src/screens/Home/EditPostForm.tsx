import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { editPost } from 'state/posts/slice'

interface EditPostFormProps {
  post: { id: number; title: string } // Post ma'lumotlari
  onCancel: () => void // onCancel funksiya
}

const EditPostForm: React.FC<EditPostFormProps> = ({ post, onCancel }) => {
  const dispatch = useDispatch()
  const [editedTitle, setEditedTitle] = useState(post.title)

  const handleEditPost = () => {
    if (editedTitle.trim() !== '') {
      dispatch(editPost({ id: post.id, title: editedTitle }))
      onCancel()
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Edit post title"
        value={editedTitle}
        onChangeText={text => setEditedTitle(text)}
      />
      <Button title="Save" onPress={handleEditPost} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width: 300,
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'yellow',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
})

export default EditPostForm
