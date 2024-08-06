import { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../Utils/Style/Colors'
import { Loader } from '../../Utils/Style/Atoms'
const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${Colors.primary};
`
const QuestionContent = styled.span`
  margin: 30px;
`
const NavLinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`
export default function Survey() {
  const { numeroQuestion } = useParams()
  const numeroQuestionInt = parseInt(numeroQuestion)
  const numeroQuestionPreced =
    numeroQuestionInt === 1 ? 1 : numeroQuestionInt - 1
  const numeroQuestionSuiv = numeroQuestionInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setIsDataLoading] = useState(false)

  useEffect(() => {
    setIsDataLoading(true)
    fetch(`http://localhost:8000/survey`).then((data) =>
      data.json().then((data) => {
        setSurveyData(data.surveyData)
        setIsDataLoading(false)
      }),
    )
  }, [])

  return (
    <SurveyContainer>
      <QuestionTitle>Question {numeroQuestion}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[numeroQuestion]}</QuestionContent>
      )}

      <NavLinkWrapper>
        <NavLink to={`/survey/${numeroQuestionPreced}`}>Précédent</NavLink>
        {surveyData[numeroQuestionInt + 1] ? (
          <NavLink to={`/survey/${numeroQuestionSuiv}`}>Suivant</NavLink>
        ) : (
          <NavLink to="/results">Résultats</NavLink>
        )}
      </NavLinkWrapper>
    </SurveyContainer>
  )
}
