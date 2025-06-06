import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppClasse from './components/AppClasse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppClasse curso = "React" />
  </StrictMode>
)

