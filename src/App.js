import React from 'react'
import './App.css'
import SiteMenu from './components/SiteMenu'
import AboutPage from './components/AboutPage'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        Alicia Wilder
      </header>

      <menu className='app-menu'>

        <SiteMenu />
      </menu>

      <content className='app-content'>

        <AboutPage />
      </content>
    </div>
  )
}

export default App
