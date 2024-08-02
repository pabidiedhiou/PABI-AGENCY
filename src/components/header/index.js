import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <NavLink to="/">Home</NavLink>------
      <NavLink to="/survey/7">survey</NavLink>------
      <NavLink to="/freelances">Profils</NavLink>
    </>
  )
}
