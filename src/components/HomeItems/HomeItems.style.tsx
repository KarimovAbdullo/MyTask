import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.backroundSecondary,
    borderTopStartRadius: '20@vs',
    borderTopEndRadius: '20@vs',
  },
  cotegoriesContent: {
    width: '100%',
    height: '20@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10@vs',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  colorButtonSeeAll: {
    color: colors.tanla,
    fontSize: '16@s',
    fontWeight: '700',
  },
  colorButtonAdd: {
    color: colors.textPrimary,
    fontWeight: '700',
    fontSize: '20@s',
  },
  cart: {
    borderRadius: '20@s',
    backgroundColor: colors.backroundPrimary,
    marginBottom: '10@s',
  },
  image: {
    width: '375@s',
    height: '150@vs',
    backgroundColor: colors.backroundSecondary,
    borderRadius: '8@s',
  },
}))
