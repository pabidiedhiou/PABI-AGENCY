import { createGlobalStyle } from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../../Utils/Context/Context'
import Colors from './Colors'
const StyledGlobalStyle = createGlobalStyle`
 * {
 font-family: 'Trebuchet MS', Helvetica, sans-serif;
 }
 body {
 background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
 color: ${({ isDarkMode }) => (isDarkMode ? Colors.secondary : 'black')};
 margin: 0; 
 }`

export default function GlobalStyle() {
  //récupérons le thème :
  const { theme } = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}
