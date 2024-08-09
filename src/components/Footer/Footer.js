import styled from 'styled-components'
import Colors from '../../Utils/Style/Colors'
import { useContext } from 'react'
import { ThemeContext } from '../../Utils/Context/Context'
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`
const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${Colors.secondary};
`
export default function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext)
  console.log(`theme = ${theme}`)
  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode: {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}
