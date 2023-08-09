import { useField, useFormikContext } from 'formik'
import { useStyles } from 'hooks/useStyles'
import React, { ReactElement, useCallback, useRef, useState } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'

import Columns from '../Columns'
import { Space } from '../Space'
import stylesConfig from './Input.styles'

export interface IInputProps extends TextInputProps {
  name: string
  label?: string | React.ReactNode
  validate?: (value: string) => string | undefined
  inputStyle?: Object
  leftIcon?: ReactElement
  rightIcon?: ReactElement
  rightIconPress?: () => void
  secondaryErrorStyle?: boolean
  hideError?: boolean
  turnOffFocusStyle?: boolean
  bottomSheetInput?: boolean
  closeIcon?: ReactElement
  closeIconPress?: () => void
}

const Input = ({
  name,
  validate,
  autoCapitalize = 'none',
  autoCorrect = false,
  secondaryErrorStyle = false,
  placeholderTextColor,
  inputStyle,
  hideError,
  turnOffFocusStyle = false,
  ...attributes
}: IInputProps) => {
  const styles = useStyles(stylesConfig)
  const [field, meta, helpers] = useField({ name, validate })
  const [leftFocus, setLeftFocus] = useState(false)
  const ref = useRef<TextInput>(null)
  const { submitCount } = useFormikContext()

  const onFocus = useCallback(() => {
    setLeftFocus(false)
    helpers.setTouched(true)
  }, [])

  const onBlur = useCallback(() => {
    setLeftFocus(true)
  }, [])

  const onChangeText = useCallback(async (value: string) => {
    helpers.setValue(value)
  }, [])

  const showError = (submitCount || leftFocus) && meta.error && !hideError

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          !turnOffFocusStyle && ref?.current?.isFocused()
            ? styles.activeInput
            : {},

          secondaryErrorStyle && showError ? styles.errorInputSecondary : {},
          inputStyle,
        ]}
        // @ts-ignore
        ref={ref}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        value={String(field.value)}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : 'blue'
        }
        {...attributes}
      />

      {showError ? (
        secondaryErrorStyle ? (
          <Columns style={styles.mt} align="center">
            <Space width={8} />
            <Text style={styles.errorTextSecondary}>{meta.error}</Text>
          </Columns>
        ) : (
          <Text style={styles.errorText}>{meta.error}</Text>
        )
      ) : null}
    </View>
  )
}

export default Input
