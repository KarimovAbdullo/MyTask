import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  line: {
    height: '35@vs',
    marginVertical: '15@vs',
    marginHorizontal: '15@s',
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'space-between',
  },
  centerCard: {
    width: '100%',
    height: '180@s',
    backgroundColor: colors.backroundPrimary,
    flexDirection: 'row',
    borderBottomWidth: '3@s',
    borderColor: colors.orange,
  },
  centerCards: {
    width: '100%',
    height: '180@s',
    backgroundColor: colors.backroundPrimary,
    flexDirection: 'row',
    borderBottomWidth: '3@s',
    borderColor: 'gray',
  },
  title: {
    color: colors.white,
    fontSize: '22@s',
  },
  titles: {
    color: colors.textPrimary,
    fontSize: '22@s',
  },
  imageCard: {
    width: '150@s',
    height: '150@vs',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '120@s',
    height: '120@vs',
  },

  centerCardName: {
    color: colors.textPrimary,
    fontSize: '27@s',
    marginBottom: '5@s',
    fontWeight: '500',
  },
  centerCardNames: {
    color: colors.textPrimary,
    fontSize: '27@s',
    marginBottom: '5@s',
    fontWeight: '500',
  },
  centerCardText: {
    width: '200@s',
    padding: '10@s',
  },
  centerCardAbout: {
    fontSize: '16@s',
    color: colors.textPrimary,
  },
  centerCardSumma: {
    flexDirection: 'row',
    top: '5@s',
  },
  centerCardQimmat: {
    fontSize: '29@s',
    color: colors.red,
    marginRight: '15@s',
  },
  centerCardQimmats: {
    fontSize: '29@s',
    color: colors.textSecondary,
    marginRight: '15@s',
  },
  centerCardArzon: {
    color: colors.textSecondary,
    fontSize: '22@s',
    top: '7@s',

    textDecorationLine: 'line-through',
    textDecorationColor: colors.backroundPrimary,
    textDecorationStyle: 'solid',
  },
  button: {
    marginTop: '10@s',
    width: '230@s',
    height: '55@vs',
    backgroundColor: colors.orange,
    borderRadius: '7@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonn: {
    marginTop: '10@s',
    width: '230@s',
    height: '55@s',
    backgroundColor: colors.textSecondary,
    borderRadius: '7@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '35@vs',
  },
  zakas: {
    color: colors.textPrimary,
    fontSize: '18@s',
  },
}))
