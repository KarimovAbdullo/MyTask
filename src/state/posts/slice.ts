import AsyncStorage from '@react-native-community/async-storage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import { IComents, IPosts } from 'types/data'

import { fetchComments, getPostsAction } from './actions'
import { PostState } from './types'

const initialState: PostState = {
  loading: false,
  postData: [],
  error: null,
  coments: [],
}

const PostsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addNewPostStart(state) {
      state.loading = true
    },
    addNewPostSuccess(state, action: PayloadAction<IPosts>) {
      state.loading = false
      state.postData.push(action.payload)
    },
    addNewPostFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    editPost(state, action: PayloadAction<{ id: number; title: string }>) {
      const { id, title } = action.payload
      const postToEdit = state.postData.find(post => post.id === id)
      if (postToEdit) {
        postToEdit.title = title
      }
    },

    deletePost(state, action: PayloadAction<number>) {
      state.postData = state.postData.filter(post => post.id !== action.payload)
    },
  },

  extraReducers: {
    [getPostsAction.pending.type]: state => {
      state.loading = true
    },
    [getPostsAction.fulfilled.type]: (
      state,
      action: PayloadAction<IPosts[]>,
    ) => {
      state.loading = false
      state.postData = action.payload
    },
    [getPostsAction.rejected.type]: state => {
      state.loading = false
    },

    [fetchComments.pending.type]: state => {
      state.loading = true
    },
    [fetchComments.fulfilled.type]: (
      state,
      action: PayloadAction<IComents[]>,
    ) => {
      state.loading = false
      state.coments = action.payload
    },
    [fetchComments.rejected.type]: state => {
      state.loading = false
    },
  },
})

const persistConfig: PersistConfig<PostState> = {
  key: 'postsData',
  storage: AsyncStorage,
  whitelist: ['posts'],
}
// export const { loginSuccess } = UserSlice.actions
export const {
  addNewPostStart,
  addNewPostSuccess,
  addNewPostFailure,
  editPost,
  deletePost,
} = PostsSlice.actions

export const postReducer = persistReducer(persistConfig, PostsSlice.reducer)
