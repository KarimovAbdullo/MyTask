import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  container: {
    backgroundColor: colors.backroundPrimary,
    flex: 1,
    paddingHorizontal: '20@s',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
}))
