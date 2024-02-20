import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const $root = document.getElementById('root') as Element
const reactRoot = ReactDOM.createRoot($root)

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
