import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey/Survey'
import Header from './components/header/index'
import ClientForm from './components/ClientForm/ClientForm'
import FreelanceForm from './components/FreelanceForm/FreelanceForm'
//On s'arrête aux Outlets
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/survey" element={<Survey />}>
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>
      </Routes>
    </>
  )
}
