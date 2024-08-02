import { Outlet, Link } from 'react-router-dom'
export default function Survey() {
  return (
    <div>
      <h1>Questionnaire</h1>
      <Link to="client">Questionnaire Client</Link>--------
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
    </div>
  )
}
