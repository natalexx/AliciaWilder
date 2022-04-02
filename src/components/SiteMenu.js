import React from 'react'
import './SiteMenu.css'

function SiteMenu () {
  const blah = (blah) => {
    console.log(blah)
  }

  return (
    <div className='menu-wrapper'>
      <div className='menu-item' onClick={() => blah('About')}>About</div>
      <div className='menu-item' onClick={() => blah('Books')}>Books</div>
    </div>
  )
}

export default SiteMenu
