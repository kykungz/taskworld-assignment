import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import RouterView from './router'

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: auto;
`

const GlobalStyle = createGlobalStyle`
  body {
    background: #eee;
  }

  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  a {
    color: #0275d8;
    text-decoration: none;
  }
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Container>
          <RouterView />
        </Container>
      </Router>
    )
  }
}

export default App
