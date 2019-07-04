import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Title = styled.div`
  min-width: 200px;
  color: #8a8a8a;
`

const Content = styled.div`
  flex: 1;
`

export default props => {
  const { title, children } = props
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  )
}
