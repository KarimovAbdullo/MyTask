import AsyncStorage from '@react-native-community/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'

// import { ILogin } from 'types/data'
import { UserState } from './types'

const initialState: UserState = {
  user_role: null,
  loading: false,
  idToken: null,
  isLogged: false,
  userData: [],
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: {},
})

const persistConfig: PersistConfig<UserState> = {
  key: 'userLogin',
  storage: AsyncStorage,
  whitelist: ['user'],
}
// export const { loginSuccess } = UserSlice.actions

export const userReducer = persistReducer(persistConfig, UserSlice.reducer)
