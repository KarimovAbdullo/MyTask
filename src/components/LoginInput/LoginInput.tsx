import { useColors } from 'hooks/useColors'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

import stylesConfig from './LoginInput.style'
interface IProps extends TextInputProps {
  value: string
  setValue: (value: string) => void
  style?: object
  placeholder?: string
  secureTextEntry?: boolean
}

export const LoginInput = ({
  placeholder,
  setValue,
  value,
  secureTextEntry,
  ...attributes
}: IProps) => {
  const styles = useStyles(stylesConfig)

  const colors = useColors()

  return (
    <View style={styles.itemsContent}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        placeholderTextColor={colors.textSecondary}
        secureTextEntry={secureTextEntry}
        {...attributes}
      />
    </View>
  )
}
