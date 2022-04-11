import React from 'react'
import styled from 'styled-components'

const BookCardGrid = styled.div`
  background-color: aquamarine;
`

const BookCard = styled.div`
  background-color: orange;
`

class BooksPage extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <>
        <title>Books</title>
        <BookCardGrid>
          <BookCard></BookCard>
          <BookCard></BookCard>
          <BookCard></BookCard>
        </BookCardGrid>
      </>
    )
  }
}

export default BooksPage
