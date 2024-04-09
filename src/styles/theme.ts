const baseTheme = {
  colors: {
    primary: '#0059ff',
    secondary: '#0099ff',
    text: '#010001',
    textLight: '#8AA1BB',
    white: '#ffffff',
    black: '#000000',
    lightGrey: '#D3D3D3',
    shadow: '#0000001A',
    error: '#FF0000',
    warning: '#FFFF00',
    success: '#00FF00',
  },
} as const

export type Colors = typeof baseTheme.colors

export type Color = keyof Colors

export const theme = {
  base: baseTheme,
}
