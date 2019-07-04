import React from 'react'
import styled from 'styled-components'
import MenuBar from '../components/MenuBar'

const Container = styled.div`
  display: flex;
  justify-content: center;
`


export default () => (
  <Container>
    <MenuBar />
  </Container>
)
