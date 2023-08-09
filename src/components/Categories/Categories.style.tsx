import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  itemsContent: {
    paddingHorizontal: '20@s',
    paddingVertical: '20@vs',
  },
  container: {
    marginRight: '20@vs',
    borderRadius: '10@s',
    width: '55@s',
    alignItems: 'center',
  },
  imageContainer: {
    width: '50@s',
    height: '50@vs',
    borderRadius: '10@s',
    backgroundColor: colors.backroundSecondary,
  },
  image: {
    width: '50@s',
    height: '50@vs',
    borderRadius: '10@s',
  },
  textContainer: {
    marginTop: '5@vs',
  },
  text: {
    textAlign: 'center',
    fontSize: '10@s',
    color: colors.textSecondary,
  },
}))
