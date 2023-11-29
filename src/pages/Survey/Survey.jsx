import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context/context'
import { useFetch } from '../../utils/hooks/hooks'
const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`
const QuestionContent = styled.span`
  margin: 30px;
`
const LinkWrapper = styled.div`
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
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
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
  const { NumeroQuestion } = useParams()
  const numeroQuestionInt = parseInt(NumeroQuestion)
  const numeroQuestionPrecedente =
    numeroQuestionInt === 1 ? 1 : numeroQuestionInt - 1
  const numeroQuestionSuivante = numeroQuestionInt + 1
  const { saveAnswers, answers } = useContext(SurveyContext)

  function saveReply(answer) {
    saveAnswers({ [NumeroQuestion]: answer })
  }
  const { data, isLoading, error } = useFetch(
    `http://localhost:7000/post/survey`,
  )
  const surveyData = data
  if (error) {
    return <span>Il y a un problème</span>
  }
  return (
    <SurveyContainer>
      <QuestionTitle> Question {NumeroQuestion}</QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <QuestionContent>
          {surveyData && surveyData[NumeroQuestion]}
        </QuestionContent>
      )}
      {answers && (
        <ReplyWrapper>
          <ReplyBox
            onClick={() => saveReply(true)}
            isSelected={answers[NumeroQuestion] === true}
          >
            Oui
          </ReplyBox>
          <ReplyBox
            onClick={() => saveReply(false)}
            isSelected={answers[NumeroQuestion] === false}
          >
            Non
          </ReplyBox>
        </ReplyWrapper>
      )}
      <LinkWrapper>
        <Link to={`/survey/${numeroQuestionPrecedente}`}>Précédent </Link>
        {surveyData[numeroQuestionInt + 1] ? (
          <Link to={`/survey/${numeroQuestionSuivante}`}>Suivant</Link>
        ) : (
          <Link to="/results">Resultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}
