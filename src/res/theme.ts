import { DefaultTheme } from '@react-navigation/native'

const theme = {
  light: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering
      main: '#facd02',
      green: '#35D17C',
      red: '#D64238',
      white: '#FFFFFF',
      blue: '#2980B9',
      lightGray: '#FFF0F5',
      orange: 'orange',

      backroundPrimary: '#fafafa',
      backroundSecondary: '#eeeeee',

      textPrimary: '#0B1F35',
      textSecondary: '#6D7986',
      textTertiary: '#B0B6BE',

      iconPrimary: '#0B1F35',
      iconSecondary: '#6D7986',
      iconLine: '#D9DCDE',
    },
  },
  dark: {
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      // Default background color, prevents flickering
      main: '#facd02',
      green: '#35D17C',
      red: '#D64238',
      white: '#FFFFFF',
      blue: '#2980B9',
      lightGray: '#FFF0F5',
      orange: 'orange',

      // backroundPrimary: '#1F1F1F',
      // backroundSecondary: '#2E2F33',

      // textPrimary: '#F2F3F3',
      // textSecondary: '#F2F3F3',
      // textTertiary: '#4A4D57',

      // iconPrimary: '#F2F3F3',
      // iconSecondary: '#6D7986',
      // iconLine: '#53575E',

      backroundPrimary: '#fafafa',
      backroundSecondary: '#eeeeee',

      textPrimary: '#0B1F35',
      textSecondary: '#6D7986',
      textTertiary: '#B0B6BE',

      iconPrimary: '#0B1F35',
      iconSecondary: '#6D7986',
      iconLine: '#D9DCDE',
    },
  },
}

export type TTheme = typeof theme.light & typeof theme.dark
export type TThemeColors = typeof theme.light.colors & typeof theme.dark.colors

export default theme
