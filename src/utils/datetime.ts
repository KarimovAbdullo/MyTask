import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import * as RNLocalize from 'react-native-localize'
require('dayjs/locale/en')

dayjs.extend(utc)

dayjs.locale(RNLocalize.getLocales()[0].languageCode)

export const formatDate = (date: Date | string, format = 'DD.MM') =>
  dayjs(date).format(format)

export default dayjs
