import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import TutorsPage from './pages/TutorsPage.jsx'
import Nav from './components/Nav.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutors" element={<TutorsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
