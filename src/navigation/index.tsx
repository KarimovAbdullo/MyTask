import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect, useRef } from 'react'
import R from 'res'
import { TTheme } from 'res/theme'
import HomeScreen from 'screens/Home'
import PostDetailScreen from 'screens/Home/PostDetailSreen'
import ELoginScreen from 'screens/Login/ELogin/ELoginScreen'
import UserLoginScreen from 'screens/Login/UserLogin/UserLoginScreen'
import { TNavigationParams } from 'types/navigation'

const Navigator = ({ theme }: { theme: TTheme }) => {
  const RootStack = createStackNavigator()
  const navigationRef = useNavigationContainerRef<TNavigationParams>()
  const routeNameRef = useRef()

  useEffect(() => {}, [])

  return (
    <NavigationContainer
      theme={theme}
      ref={navigationRef}
      onReady={() => {
        // @ts-ignore
        routeNameRef.current = navigationRef.getCurrentRoute()?.name
      }}>
      <BottomSheetModalProvider>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          <RootStack.Screen
            component={HomeScreen}
            name={R.routes.SCREEN_HOME}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />
          <RootStack.Screen
            component={ELoginScreen}
            name={R.routes.SCREEN_E_LOGIN}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />
          <RootStack.Screen
            component={UserLoginScreen}
            name={R.routes.SCREEN_USER_LOGIN}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />
          <RootStack.Screen
            component={PostDetailScreen}
            name={'PostDetailScreen'}
            options={{
              headerShown: false,
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
            }}
          />
        </RootStack.Navigator>
      </BottomSheetModalProvider>
    </NavigationContainer>
  )
}

export default Navigator
