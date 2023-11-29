import { useContext } from 'react'
import { ThemeContext } from '../context/context'
import { createGlobalStyle } from 'styled-components'
import colors from './color'
const StyledGlobalStyle = createGlobalStyle`
* {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2F2E41' : 'white')};
    margin: 0; 
    color: ${({ isDarkMode }) => (isDarkMode ? colors.secondary : 'black')}
    }
   
    
  `

function GlobalStyle() {
  const { theme } = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
