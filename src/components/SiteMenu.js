import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  display: flex;
  gap: 1rem;
  display: flex;
  align-items: stretch;
  justify-content: center;
`
const MenuItem = styled.div`
  color: var(--fgcolor2);
  cursor: pointer;
  font-weight: bolder;
  font-size: xx-large;
  padding: 1rem;
  display: flex;
  align-items: center;

  :hover {
    border-top: 5px solid transparent;
    border-bottom: 5px solid var(--fgcolor2);
  }
`

function SiteMenu () {
  const blah = (blah) => {
    console.log(blah)
  }

  return (
    <MenuWrapper>
      <MenuItem onClick={() => blah('About')}>About</MenuItem>
      <MenuItem onClick={() => blah('Books')}>Books</MenuItem>
    </MenuWrapper>
  )
}

export default SiteMenu
