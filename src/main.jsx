import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WomenSchool from './WomenSchool'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WomenSchool />
  </StrictMode>,
)
