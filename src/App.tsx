import { AppStateProvider } from 'contexts/AppStateContext'
import Navigator from 'navigation'
import React, { useEffect } from 'react'
import {
  LogBox,
  Platform,
  StatusBar,
  StyleSheet,
  UIManager,
  useColorScheme,
} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import R from 'res'
import { persistor, store } from 'state'

import AppLogic from './AppLogic'

LogBox.ignoreLogs([
  'new NativeEventEmitter',
  'RCTBridge',
  '[react-native-gesture-handler]',
])

const App = () => {
  if (__DEV__) {
    import('./reactotron').then(() => console.log('Reactotron Configured'))
  }

  const isDarkMode: boolean = useColorScheme() === 'dark'

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true)
      }
    }
  }, [])

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppStateProvider>
              <AppLogic>
                <StatusBar
                  backgroundColor={
                    isDarkMode
                      ? R.theme.dark.colors.backroundPrimary
                      : R.theme.light.colors.white
                  }
                  barStyle={isDarkMode ? 'dark-content' : 'dark-content'}
                />
                <Navigator theme={isDarkMode ? R.theme.dark : R.theme.light} />
              </AppLogic>
            </AppStateProvider>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
