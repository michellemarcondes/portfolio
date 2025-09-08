import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function ThemeBootstrap() {
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const shouldDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    document.body.classList.toggle('dark', shouldDark)
  }, [])
  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeBootstrap />
  </StrictMode>,
)
