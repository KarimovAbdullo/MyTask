import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: '10@s',
    backgroundColor: colors.tanla,
    marginRight: '39@s',
    width: '375@s',
    height: '150@vs',
  },
  image: {
    width: '375@s',
    height: '150@vs',
    borderRadius: '10@s',
  },
  itemList: {
    paddingHorizontal: '20@s',
    marginBottom: '20@s',
  },
}))
