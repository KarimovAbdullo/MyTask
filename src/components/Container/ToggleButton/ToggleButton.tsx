import React from 'react'
import { StyleSheet, Switch, View } from 'react-native'

interface IToggle {
  value: boolean
  // setIsEnabled: (isEnabled: boolean) => void
  // value: boolean
  onValueChange: () => void
}

const ToggleButton = ({ value, onValueChange }: IToggle) => {
  // const [isEnabled, setIsEnabled] = useState(false)
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: 'gray', true: 'orange' }}
        thumbColor={value ? 'orange' : 'white'}
        ios_backgroundColor="white"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 10,
  },
})

export default ToggleButton
