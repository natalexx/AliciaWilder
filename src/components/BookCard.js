import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1rem;
  padding: 1rem;
`

const Cover = styled.div`
  border: 3px solid black;
  box-shadow: 5px 3px 3px black;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  
  img {
    height: 35rem;

  }
`

const Blurb = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  text-align: center;
`

const Link = styled.div`
  img {
    height: 3rem;
  }
`

function BookCard (attributes) {
  const { blurbs, links } = attributes

  return (
    <Wrapper>
      <Cover>
        <img src={require('../assets/images/CosplayCupidCoverWIP2.png')}/>
      </Cover>
      {blurbs.map(blurb => (
        <Blurb key={blurb}>
          {blurb}
        </Blurb>
      ))}
      {links && links.map(link => (
        <Link key={link.href}>
          <a href={link.href} target='_blank' rel="noreferrer">
            <img src={link.icon} />
          </a>
        </Link>
      ))
      }
    </Wrapper>
  )
}

export default BookCard
