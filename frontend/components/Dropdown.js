import React from 'react'
import styled from 'styled-components'

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0.5em 0;
`

const Select = styled.select`
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 2px;
  border: 1px solid #e0e0e0;
  padding: 6px;
  font-size: 16px;
  background: #f5f5f5;
  cursor: pointer;
`

const IconContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  right: 4px;
  align-items: center;
  pointer-events: none;

  > i {
    font-size: 18px;
  }
`

export default props => {
  const { children, ...restProps } = props
  return (
    <DropdownContainer>
      <Select {...restProps}>{children}</Select>
      <IconContainer>
        <i className="material-icons">unfold_more</i>
      </IconContainer>
    </DropdownContainer>
  )
}
