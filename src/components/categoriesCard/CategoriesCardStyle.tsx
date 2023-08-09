import { Dimensions } from 'react-native'
import { createStyles } from 'utils/createStyles'
const width = Dimensions.get('screen').width / 2 - 30

export default createStyles(colors => ({
  card: {
    height: '230@s',
    backgroundColor: colors.backroundPrimary,
    width,
    marginHorizontal: '2@s',
    borderRadius: '10@s',
    display: 'flex',
    padding: '15@s',
    marginBottom: '20@s',
    color: colors.textSecondary,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5@s',
  },
  cardd: {
    justifyContent: 'flex-start',
  },
  carddd: {
    width: '30@s',
    height: '30@s',
    borderRadius: '15@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'red',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4,
  },
  images: {
    width: '150@s',
    height: '150@s',
  },
  name: {
    color: colors.textPrimary,
    fontWeight: '800',
    fontSize: '15@s',
  },
  about: {
    fontSize: '12@s',
    color: colors.red,
    fontWeight: 'bold',
  },
  price: {
    color: colors.textPrimary,
    fontSize: '16@s',
    paddingTop: '5@s',
  },
  priceCard: {
    alignItems: 'flex-end',
    backgroundColor: colors.textPrimary,
    Left: '130@s',
  },
  banner: {
    width: '70@s',
    height: '60@s',
    marginLeft: '10@s',

    position: 'absolute',
  },
  itemTitle: {
    marginLeft: 10,
  },
}))
