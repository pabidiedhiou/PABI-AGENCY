import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import l1 from '../../assets/22.png'
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HomeLogo = styled.img`
  height: 150px;
`
export default function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={l1} />
      </Link>
      <div>
        <StyledLink to="/">Accueil🏡</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
        <StyledLink to="/freelances"> Profils </StyledLink>
      </div>
    </NavContainer>
  )
}
