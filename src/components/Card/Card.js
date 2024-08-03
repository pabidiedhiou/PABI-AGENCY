import PropTypes from 'prop-types'
import ProfilParDefaut from '../../assets/logo.PNG'
export default function Card({ label, nom, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{nom}</span>
    </div>
  )
}

Card.defaultProps = {
  nom: '',
  label: '',
  picture: ProfilParDefaut,
}
Card.propTypes = {
  label: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}
