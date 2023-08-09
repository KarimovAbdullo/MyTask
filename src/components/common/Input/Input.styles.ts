import R from 'res'
import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  content: {
    borderWidth: 1,
    marginHorizontal: '16@s',
  },
  label: {
    marginBottom: '8@mvs1',
    paddingLeft: '12@s',
  },

  input: {
    fontSize: '16@ms1.5',
    width: '338@s',
    height: '60@mvs1',
    paddingHorizontal: '20@ms1',
    borderRadius: '5@s',
    backgroundColor: 'rgba(245, 245, 245, 1)',
    color: 'black',
    marginHorizontal: '16@s',
  },
  inputLeftIcon: {
    paddingLeft: '40@s',
  },
  inputRightIcon: {
    paddingRight: '40@s',
  },
  activeIcon: {
    zIndex: 100,
  },
  activeInput: {
    borderWidth: '1@s',
    borderColor: colors.lightGray,
  },
  error: {
    borderColor: 'red',
  },
  errorInputSecondary: {
    borderColor: 'red',
    backgroundColor: colors.background,
  },
  errorText: {
    ...R.fontSize.textRegular16,
    marginTop: '5@mvs1',
    color: 'red',
    marginHorizontal: 16,
  },
  errorTextSecondary: {
    ...R.fontSize.textRegular16,
    color: 'red',
    marginTop: '1@s',
  },
  mt: {
    marginTop: '12s@mvs1',
  },
}))
