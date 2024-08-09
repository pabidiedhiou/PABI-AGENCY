import { useContext, useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Colors from '../../Utils/Style/Colors'
import { Loader } from '../../Utils/Style/Atoms'
import { SurveyContext } from '../../Utils/Context/Context'
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
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${Colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export default function Survey() {
  const { numeroQuestion } = useParams()
  const numeroQuestionInt = parseInt(numeroQuestion)
  const numeroQuestionPreced =
    numeroQuestionInt === 1 ? 1 : numeroQuestionInt - 1
  const numeroQuestionSuiv = numeroQuestionInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setIsDataLoading] = useState(false)

  const { saveAnswers, answers } = useContext(SurveyContext)
  const [error, setError] = useState(false)
  function saveReply(answer) {
    saveAnswers({ [numeroQuestion]: answer })
  }

  useEffect(() => {
    setIsDataLoading(true)
    fetch(`http://localhost:8000/survey`)
      .then((data) =>
        data.json().then((data) => {
          setSurveyData(data.surveyData)
          setIsDataLoading(false)
        }),
      )
      .catch((error) => {
        console.log(error)
        setError(true)
      })
  }, [])
  if (error) {
    return <span>Oups il y a eu un problème</span>
  }
  console.log(`Answers: ${answers}`)
  return (
    <SurveyContainer>
      <QuestionTitle>Question {numeroQuestion}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[numeroQuestion]}</QuestionContent>
      )}
      {answers && (
        <ReplyWrapper>
          <ReplyBox
            onClick={() => saveReply(true)}
            isSelected={answers[numeroQuestion] === true}
          >
            Oui
          </ReplyBox>
          <ReplyBox
            onClick={() => saveReply(false)}
            isSelected={answers[numeroQuestion] === false}
          >
            Non
          </ReplyBox>
        </ReplyWrapper>
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
