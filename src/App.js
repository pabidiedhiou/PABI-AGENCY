import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey/Survey'
import Header from './components/header/index'
//On s'arrête aux Outlets
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </>
  )
}
