import styled from 'styled-components'
import ProfilParDefaut from '../../assets/logo.PNG'
import Card from '../../components/Card/Card'
import Colors from '../../Utils/Style/Colors'
const freelanceProfiles = [
  {
    nom: 'Pabi Diédhiou',
    titre: 'Devops',
    picture: ProfilParDefaut,
  },
  {
    nom: 'Awa Diouf',
    titre: 'Développeuse Full Stack',
    picture: ProfilParDefaut,
  },
]
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
export default function Freelances() {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Pabisme nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {freelanceProfiles.map((profil, index) => (
          <Card
            key={`${profil.nom}-${index}`}
            label={profil.titre}
            picture={profil.picture}
            nom={profil.nom}
          />
        ))}
      </CardsContainer>
    </div>
  )
}
