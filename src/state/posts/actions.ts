import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IPosts } from 'types/data'

export const getPostsAction = createAsyncThunk<IPosts>(
  'posts/get',
  async () => {
    try {
      const { data: response } = await axios.get<IPosts>(
        'https://my-json-server.typicode.com/KarimovAbdullo/myTask/posts',
      )

      return response
    } catch (e) {
      throw e
    }
  },
)

interface NewPost {
  title: string
}

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async (newPost: NewPost) => {
    const response = await axios.post(
      'https://my-json-server.typicode.com/KarimovAbdullo/myTask/posts',
      newPost,
    )
    return response.data
  },
)

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId: number) => {
    await axios.delete(
      `https://my-json-server.typicode.com/KarimovAbdullo/myTask/posts/${postId}`,
    )
    return postId
  },
)

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (postId: number) => {
    const response = await fetch(
      `https://my-json-server.typicode.com/KarimovAbdullo/myTask/comments?postId=${postId}`,
    )
    const data = await response.json()
    return data
  },
)
