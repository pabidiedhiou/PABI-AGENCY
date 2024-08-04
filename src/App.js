import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey'
import Header from './components/header/Header'
import Error from './components/Error/Error'
import Results from './pages/Results/Results'
import Freelances from './pages/Freelances/Freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  div{
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
`
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:numeroQuestion" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
