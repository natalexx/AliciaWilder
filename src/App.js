import React from 'react'
import './App.css'
import SiteFrame from './components/SiteFrame'
import styled from 'styled-components'
import './assets/theme.css'
import { BrowserRouter } from 'react-router-dom'

const AppWrapper = styled.div`
  background-color: var(--gutterbgcolor);
`

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <AppWrapper>
          <SiteFrame />
        </AppWrapper>
      </BrowserRouter>
    )
  }
}

export default App
