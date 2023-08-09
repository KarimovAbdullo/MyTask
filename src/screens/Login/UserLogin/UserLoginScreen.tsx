import HeaderCustom from 'components/common/Header/Header'
import Input from 'components/common/Input'
import { Space } from 'components/common/Space'
import Body from 'components/common/typo/Body'
import { FormButton } from 'components/FormButton/FormButton'
import { Formik } from 'formik'
import { useAppDispatch } from 'hooks/redux'
import useAppSelector from 'hooks/useAppSelector'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { KeyboardAvoidingView, View } from 'react-native'
import R from 'res'
import { IS_ANDROID } from 'res/consts'
import { loginUser } from 'state/user/actions'
import { getUser } from 'state/user/selectors'
import { ILogin } from 'types/data'

// import { required, validator } from 'utils/validators'
// import { authRequired, required, validator } from 'utils/validators'
import createStyle from './UserLoginScreen.styles'

export default function UserLoginScreen() {
  // const [error, setError] = useState('')
  const dispatch = useAppDispatch()
  const navigation = useSmartNavigation()
  const { loading } = useAppSelector(getUser)

  const onSubmitPress = async (data: ILogin) => {
    //@ts-ignore
    dispatch(
      loginUser({
        data,
        onSuccess: () => {
          navigation.navigate(R.routes.SCREEN_HOME)
        },
      }),
    )
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

      <Formik onSubmit={onSubmitPress} initialValues={initialValues}>
        {() => (
          <KeyboardAvoidingView behavior={IS_ANDROID ? 'height' : 'padding'}>
            <View>
              <Space height={25} />
              <Input
                name="username"
                placeholderTextColor={'rgba(127, 128, 129, 1)'}
                secureTextEntry={false}
                placeholder="Логин"
                keyboardType="default"
                maxLength={19}
                // validate={validator(authRequired)}
              />
              <Space height={16} />
              <Input
                name="password"
                placeholderTextColor={'rgba(127, 128, 129, 1)'}
                secureTextEntry={false}
                placeholder="Пароль"
                keyboardType="default"
                maxLength={15}
                // validate={validator(required)}
              />

              <Space height={16} />

              <FormButton
                text={'Kirish'}
                loading={loading}
                style={styles.btn}
              />
            </View>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </View>
  )
}
