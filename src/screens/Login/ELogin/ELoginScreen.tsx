import CustomButton from 'components/common/CustomButton'
import HeaderCustom from 'components/common/Header/Header'
import Input from 'components/common/Input'
import { Space } from 'components/common/Space'
import Body from 'components/common/typo/Body'
import { Formik } from 'formik'
// import useAppDispatch from 'hooks/useAppDispatch'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { View } from 'react-native'
// import { loginUser } from 'state/user/actions'
import { ILogin } from 'types/data'
import { authRequired, validator } from 'utils/validators'

import createStyle from './ELoginScreen.styles'

export default function ELoginScreen() {
  // const dispatch = useAppDispatch()
  const [error] = useState('')

  const onSubmit = async () => {
    // dispatch(loginUser({}))
  }

  const initialValues: ILogin = {
    username: '',
    password: '',
  }

  const styles = useStyles(createStyle)
  return (
    <View style={styles.container}>
      <HeaderCustom />
      <View style={styles.textCard}>
        <Body center size={22} semiBold>
          Электронное голосование
        </Body>

        <Space height={10} />
        <Body size={18} center>
          Для регистрации на площадке Электронное голосование свяжитесь с нами
        </Body>
      </View>

      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {() => (
          <View>
            <Space height={25} />
            <Input
              name="userName"
              placeholderTextColor={'rgba(127, 128, 129, 1)'}
              secureTextEntry={false}
              // label="Введите номер телефона"
              placeholder="Логин"
              keyboardType="default"
              maxLength={15}
              validate={validator(authRequired)}
            />
            <Space height={16} />
            <Input
              name="password"
              placeholderTextColor={'rgba(127, 128, 129, 1)'}
              secureTextEntry={false}
              // label="Введите номер телефона"
              placeholder="Пароль"
              keyboardType="default"
              maxLength={15}
              validate={validator(authRequired)}
            />

            <Body size={12} color="red">
              {error}
            </Body>

            <Space height={16} />

            <CustomButton text="Войти" />
          </View>
        )}
      </Formik>
    </View>
  )
}
