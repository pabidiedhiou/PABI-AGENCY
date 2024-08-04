import styled from 'styled-components'
import Colors from '../../Utils/Style/Colors'
import HomeIllustration from '../../assets/home-illustration.svg'
import { StyledNavLink } from '../../Utils/Style/Atoms'
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${Colors.background};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledNavLink} {
    max-width: 250px;
  }
`
const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
`

export default function Home() {
  return (
    <HomeWrapper>
      <HomerContainer>
        <LeftCol>
          <StyledTitle>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledNavLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledNavLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomerContainer>
    </HomeWrapper>
  )
}
