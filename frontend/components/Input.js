import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 8px;
`

export default props => {
  return <Input type="text" {...props} />
}
