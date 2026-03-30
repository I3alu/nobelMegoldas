import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import CardShow from './components/CardShow'
import NewNobel from './components/NewNobel.jsx'
import EditNobel from './components/EditNobel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/:id' element={<CardShow/>}/>
        <Route path='/form' element={<NewNobel/>}/>
        <Route path='/edit/:id' element={<EditNobel/>}/>
      </Routes>
    </Router>
  </StrictMode> 
)
