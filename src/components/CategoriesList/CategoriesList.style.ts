import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  listContent: {
    justifyContent: 'center',
    width: '48%',
    alignItems: 'center',
    height: '170@vs',
    borderRadius: '12@s',
    backgroundColor: colors.backroundSecondary,
  },
  imageContainer: {
    width: '140@s',
    height: '140@s',
    backgroundColor: colors.backroundSecondary,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '150@s',
  },
  textContainer: {
    justifyContent: 'center',
  },
  text: {
    fontSize: '16@s',
    color: colors.textPrimary,
    fontWeight: '700',
    fontStyle: 'none',
  },
  iconContainer: {
    marginLeft: '10@s',
    justifyContent: 'center',
  },
  image: {
    width: '140@s',
    height: '140@vs',
  },
  container: {
    paddingHorizontal: '10@s',
    alignItems: 'center',
  },
  itemContent: {
    justifyContent: 'space-between',
  },
}))
