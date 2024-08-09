import styled from 'styled-components'
import Card from '../../components/Card/Card'
import Colors from '../../Utils/Style/Colors'
import { Loader } from '../../Utils/Style/Atoms'
import { useEffect, useState } from 'react'
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`
const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${Colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default function Freelances() {
  const [freeLancersList, setFreeLancersList] = useState([])
  const [isDataLoading, setIsDataLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    async function fetchFreelances() {
      setIsDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreeLancersList(freelancersList)
      } catch (error) {
        console.log('===== error =====', error)
        setError(true)
      } finally {
        setIsDataLoading(false)
      }
    }
    fetchFreelances()
  }, [])
  if (error) {
    return <span>Oh Désolé!!! Il y'a un problème</span>
  }
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Pabisme nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freeLancersList.map((profil, index) => (
            <Card
              key={`${profil.name}-${index}`}
              label={profil.job}
              name={profil.name}
              picture={profil.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}
