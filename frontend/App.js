import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import RouterView from './router'

import { observer } from 'mobx-react'
import store from './store'

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

@observer
class App extends React.Component {
  async componentDidMount() {
    if (window.location.pathname !== '/login') {
      await store.fetchUser()
    }
  }

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
