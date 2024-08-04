import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../Utils/Style/Colors'
import DarkLogo from '../../assets/dark-logo.png'
//
const StyledNavLink = styled(NavLink)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color:white; border-radius:30px; background-color:${Colors.primary}`}
`
const DarkLogoStyled = styled.img`
  height: 70px;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export default function Header() {
  return (
    <NavContainer>
      <NavLink to="/">
        <DarkLogoStyled src={DarkLogo} alt="" />
      </NavLink>
      <StyledNavLink to="/">Home</StyledNavLink>

      <StyledNavLink to="/survey/7" $isFullLink>
        survey
      </StyledNavLink>
      <StyledNavLink to="/freelances">Profils</StyledNavLink>
    </NavContainer>
  )
}
