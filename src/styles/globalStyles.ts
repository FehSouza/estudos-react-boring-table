import { createGlobalStyle as css } from 'styled-components'

export const GlobalStyles = css`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    font-display: swap;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  #root {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    display: inline-block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-display: swap;
    font-size: 16px;
    font-weight: 400;
  }

  button,
  input,
  textarea {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    font-display: swap;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  button {
    transition-duration: 350ms;
  }

  button:hover {
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    transition-duration: 350ms;
  }

  a:hover {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.black};
    border: 3px solid ${({ theme }) => theme.colors.white};
  }
`
