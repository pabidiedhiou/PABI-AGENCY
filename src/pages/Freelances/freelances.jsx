import React, { useEffect, useState } from 'react'
//import DefaultPicture from '../../assets/logo.PNG'
import Card from '../../components/Card/Card'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import { Loader } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks/hooks'
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Freelances() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)
  const [freelancersList, setFreelancesList] = useState([])
  const { theme } = useTheme()
  useEffect(() => {
    async function fetchFreelance() {
      setDataLoading(true)
      try {
        const responses = await fetch(`http://localhost:7000/post/Getfreelance`)
        const tableau = await responses.json()

        const freelancersList = tableau.freelances
        console.log(freelancersList)
        setFreelancesList(freelancersList)
      } catch (error) {
        console.log('=====error=====', error)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelance()
  }, [])
  if (error) {
    return <span>Oups il y a eu un problème</span>
  }
  return (
    <div>
      <PageTitle>Trouvez votre prestataire 👩·💻👨·💻👩·💻</PageTitle>
      <PageSubtitle>
        Chez Pabisme nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelances
