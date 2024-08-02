import { useParams, NavLink } from 'react-router-dom'
export default function Survey() {
  const { numeroQuestion } = useParams()
  const numeroQuestionInt = parseInt(numeroQuestion)
  const numeroQuestionPreced =
    numeroQuestionInt === 1 ? 1 : numeroQuestionInt - 1
  const numeroQuestionSuiv = numeroQuestionInt + 1
  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Le numéro de la question est: {numeroQuestion}</h2>
      <NavLink to={`/survey/${numeroQuestionPreced}`}>Précédent</NavLink>------
      {numeroQuestionInt === 10 ? (
        <NavLink to="/results">Résultats</NavLink>
      ) : (
        <NavLink to={`/survey/${numeroQuestionSuiv}`}>Suivant</NavLink>
      )}
    </div>
  )
}
