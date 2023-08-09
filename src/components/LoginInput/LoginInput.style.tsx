import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  itemsContent: {
    paddingVertical: '7@vs',
    backgroundColor: colors.backroundPrimary,
    borderRadius: '8@s',
    marginBottom: '10@vs',
    borderWidth: '1@s',
    borderColor: colors.iconLine,
  },
  input: {
    width: '330@s',
    marginHorizontal: '10@s',
    fontSize: '16@s',
    color: colors.textPrimary,
  },
}))
