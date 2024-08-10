import { useContext } from 'react'
import { SurveyContext } from '../../Utils/Context/Context'
import styled from 'styled-components'
import { useFetch, useTheme } from '../../Utils/Hooks/Hooks'
import { StyledNavLink, Loader } from '../../Utils/Style/Atoms'
import Colors from '../../Utils/Style/Colors'
const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? Colors.backgroundLight : Colors.backgroundDark};
`
const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`
const DescriptionWrapper = styled.div`
  padding: 60px;
`
const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? Colors.primary : Colors.backgroundLight};
  text-transform: capitalize;
`
const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? Colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

export default function Results() {
  const { theme } = useTheme()
  const { answers } = useContext(SurveyContext)
  const fetchParams = formatFetchParams(answers)
  const { data, isDataLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`,
  )
  if (error) {
    return <span>Il y a un problème</span>
  }
  const resultsData = data?.resultsData
  return isDataLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {result.title}
              {index === resultsData.length - 1 ? '' : ','}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledNavLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledNavLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}
