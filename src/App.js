import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey/Survey'
import Header from './components/header/index'
import Error from './components/Error/Error'
import Results from './pages/Results/Results'
import Freelances from './pages/Freelances/Freelances'
export default function App() {
  return (
    <>
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
