import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Survey from './pages/Survey/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './pages/Results/Results'
import Freelances from './pages/Freelances/freelances'
import Footer from './components/Footer/footer'
import { ThemeProvider, SurveyProvider } from './utils/context/context'
import GlobalStyle from './utils/style/GlobalStyle'

function App() {
  return (
    <ThemeProvider>
      <SurveyProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:NumeroQuestion" element={<Survey />}></Route>
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </SurveyProvider>
    </ThemeProvider>
  )
}

export default App
