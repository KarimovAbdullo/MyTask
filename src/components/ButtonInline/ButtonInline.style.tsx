import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  text: {
    fontSize: '16@s',
    color: colors.tanla,
  },

  icon: {
    marginRight: '20@s',
  },
  container: {
    height: '55@vs',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.backroundSecondary,
    paddingLeft: '10@s',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
}))
