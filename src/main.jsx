import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Mobile from './Mobile.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider isDisabled={screen.width<=1150}>
    {(screen.width >= 720) &&<App />}
    {(screen.width < 720) &&<Mobile />}
    </ParallaxProvider>
  </React.StrictMode>,
)
