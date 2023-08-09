import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  listContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.backroundPrimary,
  },
  imageContainer: {
    width: '85@s',
    height: '80@vs',
    marginHorizontal: '10@s',
    marginVertical: '10@vs',
    backgroundColor: colors.backroundSecondary,
    borderColor: colors.white,
    borderRadius: '150@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '250@s',
    justifyContent: 'center',
  },
  text: {
    fontSize: '20@s',
    marginVertical: '5@vs',
    paddingLeft: '5@s',
    color: colors.textPrimary,
    fontWeight: '600',
    fontStyle: 'none',
  },
  iconContainer: {
    marginLeft: '10@s',
    justifyContent: 'center',
  },
  image: {
    width: '60@s',
    height: '60@s',
  },
}))
