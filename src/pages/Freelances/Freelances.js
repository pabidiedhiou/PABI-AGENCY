import styled from 'styled-components'
import Card from '../../components/Card/Card'
import Colors from '../../Utils/Style/Colors'
import { Loader } from '../../Utils/Style/Atoms'
import { useFetch } from '../../Utils/Hooks/Hooks'
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
  const { isDataLoading, data, error } = useFetch(
    `http://localhost:8000/freelances`,
  )

  const freeLancersList = data.freelancersList
  if (error) {
    return <span>Il y'a un problème !!</span>
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
          {freeLancersList &&
            freeLancersList.map((profil, index) => (
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
