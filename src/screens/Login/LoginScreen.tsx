import LoginHeader from 'components/common/LoginHeader'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
const logoComp = require('assets/images/ok.png')
const topImg = require('assets/images/key.png')
const dodImg = require('assets/images/dod.png')
import useSmartNavigation from 'hooks/useSmartNavigation'
import R from 'res'

import createStyle from './LoginScreen.style'

export default function LoginScreen() {
  const styles = useStyles(createStyle)
  const navigation = useSmartNavigation()

  const goElogin = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_E_LOGIN)
  }

  const goUserLogin = () => {
    //@ts-ignore
    navigation.navigate(R.routes.SCREEN_USER_LOGIN)
  }

  return (
    <View style={styles.main}>
      <LoginHeader />

      <View style={styles.logo}>
        <Image source={logoComp} style={styles.image} />
      </View>

      <TouchableOpacity
        style={styles.topCard}
        activeOpacity={0.8}
        onPress={goElogin}>
        <Image source={topImg} style={styles.topImg} />

        <Text style={styles.text}>Войти с помощью ЭЦП</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.bottomCard}
        activeOpacity={0.8}
        onPress={goUserLogin}>
        <Image source={dodImg} style={styles.dodImg} />

        <Text style={styles.text}>
          Войти с помощью системного логина и пароля
        </Text>
      </TouchableOpacity>
    </View>
  )
}
