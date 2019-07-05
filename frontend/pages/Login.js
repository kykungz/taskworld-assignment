import React, { useState } from 'react'
import styled from 'styled-components'

import Box from '../components/Box'
import Input from '../components/Input'
import Label from '../components/Label'
import Logo from '../components/Logo'
import AccentButton from '../components/AccentButton'
import { observer } from 'mobx-react'
import store from '../store'

const Container = styled(Box)`
  padding: 1em;
  max-width: 400px;
  margin: auto;
  text-align: center;
`

const Form = styled.form`
  text-align: left;
  > div + div {
    margin-top: 1em;
  }
`

const Title = styled(Label)`
  font-size: 20px;
  margin-bottom: 1.5em;
  text-align: center;
`

export default observer(props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = e => {
    setUsername(e.target.value.trim())
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value.trim())
  }

  const handleLogin = e => {
    e.preventDefault()
    store.login(username, password)
  }

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
        <div>
          <Label>Username</Label>
          <Input
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
          />
        </div>

        <div>
          <Label>Password</Label>
          <Input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            autoComplete="password"
          />
        </div>

        <div>
          <AccentButton block type="submit">
            Login
          </AccentButton>
        </div>
      </Form>
    </Container>
  )
})
