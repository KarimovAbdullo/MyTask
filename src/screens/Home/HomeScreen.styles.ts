import { createStyles } from 'utils/createStyles'

export default createStyles(() => ({
  main: {
    borderWidth: 2,
    width: '300@s',
    alignSelf: 'center',
    marginVertical: '10@vs',
    paddingVertical: '20@vs',
    paddingHorizontal: '10@s',
    borderRadius: '20@s',
    backgroundColor: 'yellow',
  },
  container: {
    backgroundColor: 'grey',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: '20@s',
    marginVertical: '20@vs',
    marginHorizontal: '20@s',
  },
  btn: {
    width: 100,
  },
}))
