import ProfilParDefaut from '../../assets/logo.PNG'
import Card from '../../components/Card/Card'
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
export default function Freelances() {
  return (
    <div>
      <h1>Freelances</h1>
      {freelanceProfiles.map((profil, index) => (
        <Card
          key={`${profil.nom}-${index}`}
          label={profil.titre}
          picture={profil.picture}
          nom={profil.nom}
        />
      ))}
    </div>
  )
}
