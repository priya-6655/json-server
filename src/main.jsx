import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import FilePath from './root/FilePath'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FilePath />
    </BrowserRouter>
  </StrictMode>,
)
