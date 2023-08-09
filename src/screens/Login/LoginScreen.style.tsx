import { createStyles } from 'utils/createStyles'

export default createStyles(() => ({
  image: {
    width: '358@s',
    height: '88.81@vs',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    marginTop: '64@vs',
    marginBottom: '10@vs',
  },
  topImg: {
    width: '26@s',
    height: '25@s',
  },
  dodImg: {
    width: '36@s',
    height: '19@s',
  },
  topCard: {
    flexDirection: 'row',
    paddingHorizontal: '33@s',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: '16@s',
    marginTop: '16@vs',
    paddingVertical: '45@vs',
    borderRadius: '5@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 7,
    backgroundColor: 'white',
  },
  bottomCard: {
    flexDirection: 'row',
    paddingHorizontal: '33@s',
    alignItems: 'center',
    marginHorizontal: '16@s',
    marginTop: '16@vs',
    paddingVertical: '16@vs',
    borderRadius: '5@s',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 7,
    backgroundColor: 'white',
  },
  text: {
    width: '80%',
    alignSelf: 'center',
    fontSize: '20@ms',
    color: 'black',
    fontWeight: '500',
    lineHeight: '24@ms',
    marginLeft: '28@s',
  },
}))
