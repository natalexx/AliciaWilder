import React from 'react'
import styled from 'styled-components'
import BookCard from './BookCard'

const BookCardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

function BooksPage () {
  return (
    <div className='content-wrapper'>
      <title>Books</title>
      <BookCardGrid>
        <BookCard
          blurbs={['My favourite book!', 'I was not prepared for the gratuitous sex scenes.']}
          links={[{ href: 'http://example.com', icon: 'https://icons.iconarchive.com/icons/bokehlicia/captiva/256/web-amazon-icon.png' }]}
          image='/assets/images/CosplayCupidCoverWIP2.png'
        >
        </BookCard>
        <BookCard
          blurbs={[]}
        >
        </BookCard>
        <BookCard blurbs={[]}>
        </BookCard>
      </BookCardGrid>
    </div>
  )
}

export default BooksPage
