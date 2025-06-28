import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Header } from './components/Header/Header'
import { Trend } from './components/Trending/Trend.jsx'
import { Popular } from './components/Popular/Popular.jsx'
import { Show } from './components/ShowAll/Show.jsx'
import { Footer } from './components/Footer/Footer.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Trend/>
    <Popular/>
    <Show/>
    <Footer/>
  </StrictMode>,
)
