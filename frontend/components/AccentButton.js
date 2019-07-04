import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 0.5em 1em;
  background: #0275d8;
  color: white;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 300ms;

  ${props => props.block && 'width: 100%;'}

  &:hover {
    background: #1387eb;
  }

  &:disabled {
    background: #eee;
    color: lightgray;
    cursor: not-allowed;
    border: thin solid lightgray;
  }
`

export default props => {
  const { children, block, ...restProps } = props

  return (
    <Button block={block} {...restProps}>
      {children}
    </Button>
  )
}
