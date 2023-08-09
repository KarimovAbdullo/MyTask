import { Dimensions, Platform } from 'react-native'
import Config from 'react-native-config'

// API list
export const API_BASE_URL = Config.API_BASE_URL

export const API_PATH_LOGIN = '/authenticate'
export const API_PATH_USER_DATA = '/account'
// export const API_PATH_GET_COMPANY_USER = (id: string | number) =>
//   `/company/user/${id}`
export const API_PATH_GET_COMPANY_USER = (id: string | number) =>
  `/company/user/${id}`

//Device
export const IS_ANDROID = Platform.OS === 'android'
export const IS_IOS = !IS_ANDROID

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
