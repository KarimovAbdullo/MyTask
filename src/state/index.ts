import { combineReducers, configureStore } from '@reduxjs/toolkit'
import Reactotron from 'reactotron'
import { persistStore } from 'redux-persist'
import { userReducer } from 'state/user/slice'

import { postReducer } from './posts/slice'

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
})

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    enhancers: [
      // @ts-ignore
      Reactotron.createEnhancer(),
    ],
  })
}

const store = setupStore()

const persistor = persistStore(store)

export { persistor, store }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
