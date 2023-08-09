import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alignCenter: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '95%',
  },
  border: {
    borderColor: colors.backroundSecondary,
    borderBottomWidth: '1@s',
    marginBottom: '15@vs',
    paddingBottom: '15@vs',
  },
}))
