import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AllImages from './pages/AllImages'
import AddImage from './pages/AddImage'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<AllImages />} />
        <Route exact path="/add" element={<AddImage />} />
      </Routes>
    </Router>
  )
}

export default App
