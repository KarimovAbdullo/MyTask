import { IUsers } from 'api/data/CategoryData'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

import CategoriesCardStyle from './CategoriesCardStyle'

const CategoriesCard = ({ data }: { data: IUsers }) => {
  const styles = useStyles(CategoriesCardStyle)
  const navgation = useSmartNavigation()

  const asd = () => {
    console.log('====================================')
    console.log()
    console.log('====================================')
    //@ts-ignore
    navgation.navigate(R.routes.SCREEN_DETAIL, { item: data })
  }

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={asd}>
      <View style={[styles.card, styles.shadow]} key={data.id}>
        <View style={styles.cardd}>
          <View>
            {/* <ImageBackground
            source={require('./banner.png')}
            style={styles.banner}
          /> */}
          </View>

          <Image source={data.img} style={styles.images} />
          <View style={styles.itemTitle}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.about}>{data.about}</Text>
            <Text style={styles.price}>{data.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CategoriesCard
