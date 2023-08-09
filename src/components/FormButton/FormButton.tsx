import { useFormikContext } from 'formik'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

import stylesConfig from './FormButton.styles'

interface IProps {
  text: string | string[]
  onPress?: (() => void) | undefined
  style?: object
  textStyle?: object
  loading?: boolean
  disabled?: boolean
  disableSubmit?: boolean
  transparent?: boolean
}

export const FormButton = ({
  text,
  onPress,
  style,
  loading = false,
  disabled = false,
  disableSubmit = false,
}: IProps) => {
  const styles = useStyles(stylesConfig)
  const form = useFormikContext()

  const onSubmitPress = () => {
    if (!disableSubmit) {
      form.handleSubmit()
    }

    if (onPress) {
      onPress()
    }
  }

  return (
    <TouchableOpacity onPress={onSubmitPress} disabled={disabled || loading}>
      <View style={[styles.button, disabled ? styles.disabled : {}, style]}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.text, disabled ? styles.textDisabled : {}]}>
            {text}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
