import React from 'react'
import './App.css'
import SiteFrame from './components/SiteFrame'
import styled from 'styled-components'
import './assets/theme.css'

const AppWrapper = styled.div`
  background-color: var(--gutterbgcolor);
`

class App extends React.Component {
  render () {
    return (
      <AppWrapper>
        <SiteFrame />
      </AppWrapper>
    )
  }
}

export default App
