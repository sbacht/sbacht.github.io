import React from 'react'
import ReactDOM from 'react-dom/client'
import ResumeSite from './ResumeSite.jsx'
import './index.css'
// Theme is controlled by the app (persisted in localStorage)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResumeSite />
  </React.StrictMode>,
)
