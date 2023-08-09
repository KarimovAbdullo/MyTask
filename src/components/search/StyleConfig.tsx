import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  safe: {
    backgroundColor: colors.backroundPrimary,
    flex: '1@s',
    paddingHorizontal: '20@s',
  },
  cart: {
    width: '320@s',
    marginTop: '10@s',
    marginBottom: '10@s',
    backgroundColor: colors.backroundSecondary,
    borderRadius: '10@s',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    left: '20@s',
  },
  imag: {
    width: '20@s',
    height: '20@vs',
    backgroundColor: colors.red,
  },
  input: {
    color: colors.textPrimary,
    width: '270@s',
  },
}))
