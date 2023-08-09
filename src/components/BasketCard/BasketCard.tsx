import ToggleButton from 'components/Container/ToggleButton/ToggleButton'
import { useStyles } from 'hooks/useStyles'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import BasketCardStyle from './BasketCard.style'
const BasketCard = () => {
  const styles = useStyles(BasketCardStyle)

  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  return (
    <LinearGradient
      colors={isEnabled ? ['orange', 'white'] : ['gray', 'white']}
      // style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <View style={styles.line}>
        <Text style={isEnabled ? styles.titles : styles.title}>
          express dostavka
        </Text>
        <ToggleButton onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      <View>
        <View style={isEnabled ? styles.centerCard : styles.centerCards}>
          <View style={styles.imageCard}>
            <Image
              source={require('../../api/data/data.image/hd.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.centerCardText}>
            <Text
              style={
                isEnabled ? styles.centerCardName : styles.centerCardNames
              }>
              xiomi Saeef
            </Text>
            <Text style={styles.centerCardAbout}>230 gb</Text>
            <View style={styles.centerCardSumma}>
              <Text
                style={
                  isEnabled ? styles.centerCardQimmat : styles.centerCardQimmats
                }>
                350$
              </Text>
              <Text style={styles.centerCardArzon}>345$</Text>
            </View>
            {isEnabled ? (
              <TouchableOpacity
                style={isEnabled ? styles.button : styles.buttonn}>
                <Text style={styles.zakas}>ZAKAZAT</Text>
              </TouchableOpacity>
            ) : (
              <View style={isEnabled ? styles.button : styles.buttonn}>
                <Text style={styles.zakas}>ZAKAZAT</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}
export default BasketCard
