import { createStyles } from 'utils/createStyles'

export default createStyles(colors => ({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(19, 59, 136, 1)',
    paddingVertical: '11@vs',
    borderRadius: '5@vs',
    fontWeight: 'bold',
    width: '348@s',
    height: '60@vs',
    alignSelf: 'center',
    borderBottomWidth: '0@s',
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20@vs',
  },
  disabled: {
    shadowOpacity: '0@s',
    elevation: '0@s',
    opacity: '0.4@s',
  },
}))
