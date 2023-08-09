import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  itemsContent: {
    paddingHorizontal: '20@s',
    paddingVertical: '20@vs',
    borderTopStartRadius: '20@s',
  },
  contener: {
    width: '150@s',
    height: '280@vs',
    marginRight: '20@vs',
    borderRadius: '10@s',
    backgroundColor: colors.backroundPrimary,
    alignItems: 'center',
    shadowColor: colors.iconSecondary,
    shadowOffset: {
      width: '4@vs',
      height: '5@s',
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 4,
  },
  imageContainer: {
    width: '140@s',
    height: '150@vs',
    marginTop: '5@vs',
    backgroundColor: colors.backroundSecondary,
    borderRadius: '10@s',
    justifyContent: 'center',
  },
  image: {
    width: '140@s',
    height: '180@vs',
    borderRadius: '5@s',
    justifyContent: 'center',
  },
  textContener: {
    width: '135@s',
    height: '60@vs',
    marginTop: '5@vs',
    borderRadius: '6@s',
  },
  colorItemText: {
    color: colors.textPrimary,
    fontSize: '14@s',
    fontWeight: '500',
    marginBottom: '20@vs',
    paddingLeft: '10@s',
  },
  colorPriseText: {
    color: colors.textPrimary,
    fontSize: '16@s',
    fontWeight: '700',
    paddingHorizontal: '10@s',
    backgroundColor: colors.backroundSecondary,
    borderRadius: '5@s',
  },
  colorRewivsText: {
    color: colors.textPrimary,
    fontSize: '10@s',
    fontWeight: '500',
  },
  buttonContainer: {},
  button: {
    width: '130@s',
    height: '40@vs',
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}))
