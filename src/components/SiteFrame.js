
import React from 'react'
import './SiteFrame.css'
import SiteMenu from './SiteMenu'
import AboutPage from './AboutPage'

function SiteFrame () {
  return (
    <div className='site-frame'>
      <header className="app-header">
        <div className='header-left'>
          <div className='name'>Alicia Wilder</div>
          <sub>Happy endings for women with &quot;issues&quot;</sub>
        </div>
        <menu className='app-menu'>
          <SiteMenu />
        </menu>

      </header>

      <div className='app-content'>
        <AboutPage />
      </div>
    </div>
  )
}

export default SiteFrame
