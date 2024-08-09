import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Survey from './pages/Survey/Survey'
import Header from './components/header/Header'
import Error from './components/Error/Error'
import Results from './pages/Results/Results'
import Freelances from './pages/Freelances/Freelances'
import Footer from './components/Footer/Footer'
import { MonProviderDeTheme, SurveyProvider } from './Utils/Context/Context'
import GlobalStyle from './Utils/Style/GlobalStyle'
export default function App() {
  return (
    <MonProviderDeTheme>
      <SurveyProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey/:numeroQuestion" element={<Survey />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </SurveyProvider>
    </MonProviderDeTheme>
  )
}
