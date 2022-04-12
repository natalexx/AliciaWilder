
import React from 'react'
import SiteHeader from './SiteHeader'
import SiteMenu from './SiteMenu'
import AboutPage from './AboutPage'
import BooksPage from './BooksPage'
import styled from 'styled-components'
import {
  Routes,
  Route
} from 'react-router-dom'

const Frame = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "logo  menu"
    "content  content";
  justify-items: stretch;
  height: 100vh;
  margin: 0 3rem;
  `
const Content = styled.div`
    flex-grow:2;
    height: 100%;
    grid-area: content;
    background-color: var(--bgcolor2);
  `

const Header = styled.div`
  grid-area: logo;
`
const Menu = styled.div`
  background-color: var(--bgcolor1);
  grid-area: menu;
  justify-content: center;
  display: flex;
  align-items:stretch;
`
class SiteFrame extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Frame>
        <Header>
          <SiteHeader className='logo' />
        </Header>
        <Menu>
          <SiteMenu className='menu' />
        </Menu>
        <Content>
          <Routes>
            <Route path="/" element={<AboutPage />}/>
            <Route path="books" element={<BooksPage />}/>
          </Routes>
        </Content>
      </Frame>
    )
  }
}
export default SiteFrame
