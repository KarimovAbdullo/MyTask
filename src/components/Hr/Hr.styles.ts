import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  hr: {
    height: '12@vs',
    backgroundColor: colors.backroundPrimary,
  },
  hrText: {
    flex: 1,
  },
  hrWithText: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: '20@s',
  },
}))
