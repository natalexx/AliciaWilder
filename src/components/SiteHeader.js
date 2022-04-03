import React from 'react'
import styled from 'styled-components'
import '../assets/animations.css'

const HeaderWrapper = styled.div`
  color: var(--fgcolor1);
  background-color: var(--bgcolor1);
  font-size: 3.5rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
  padding: 1rem;

  `
const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  `
const Name = styled.div`
    text-transform: uppercase;
  `
const Sub = styled.div`
    font-size: medium;
    text-align-last: justify;
    text-transform: uppercase;
  `

class SiteHeader extends React.Component {
  constructor () {
    super()
    this.state = {
      theme: {
        primaryColor: 'cornflowerblue',
        secondaryColor: 'orange',
        backgroundColor: 'darkgray'
      }
    }
  }

  render () {
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <Name>Alicia Wilder</Name>
          <Sub>Happy endings for women with &quot;issues&quot;</Sub>
        </HeaderLeft>
      </HeaderWrapper>
    )
  }
}

export default SiteHeader
