import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: baseline;

  & + & {
    margin-left: 40px;
  }
`

const Input = styled.input`
  margin-right: 8px;
`

const Content = styled.div`
  font-size: 14px;
  color: #4e4e4e;
`

export default props => {
  const { children, name, value } = props
  return (
    <Container>
      <Input type="radio" name={name} value={value} />
      <Content>{children}</Content>
    </Container>
  )
}
