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
  const { children, ...restProps } = props
  return (
    <Container>
      <Input {...restProps} type="radio" />
      <Content>{children}</Content>
    </Container>
  )
}
