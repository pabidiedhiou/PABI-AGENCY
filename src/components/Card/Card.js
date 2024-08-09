import PropTypes from 'prop-types'
import ProfilParDefaut from '../../assets/logo.PNG'
import styled from 'styled-components'
import Colors from '../../Utils/Style/Colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${Colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`
export default function Card({ label, name, picture }) {
  return (
    <CardWrapper
      style={{ display: 'flex', flexDirection: 'column', padding: 15 }}
    >
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span>{name}</span>
    </CardWrapper>
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
