const baseTheme = {
  colors: {
    primary: '#09090b',
    secondary: '#27272a',
    secondary200: '#27272a80',
    secondary400: '#27272aBF',
    text: '#ffffff',
    textLight: '#a1a1aa',
    white: '#ffffff',
    black: '#000000',
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
