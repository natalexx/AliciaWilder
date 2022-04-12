import React from 'react'
import styled from 'styled-components'

const BookCardGrid = styled.div`
  background-color: aquamarine;
`

const BookCard = styled.div`
  background-color: orange;
`

function BooksPage () {
  return (
    <div className='content-wrapper'>
      Books page
      <title>Books</title>
      <BookCardGrid>
        <BookCard>bookcard</BookCard>
        <BookCard>bookcard 2</BookCard>
        <BookCard>bookcard 3</BookCard>
      </BookCardGrid>
    </div>
  )
}

export default BooksPage
