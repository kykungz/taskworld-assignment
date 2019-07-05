import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  display: flex;
  padding-right: 4px;
  padding-top: 8px;
`

const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background: #0275d8;
  border-radius: 4px;
  font-size: 10px;
  color: white;
  padding: 2px 4px;
  border: 1px solid white;
`

export default props => {
  const { text, children } = props

  return (
    <Container>
      {children}
      <Badge>{text}</Badge>
    </Container>
  )
}
