import React, { useState } from 'react'
import styled from 'styled-components'

import Box from '../components/Box'
import Input from '../components/Input'
import Label from '../components/Label'
import AccentButton from '../components/AccentButton'
import { observer } from 'mobx-react'
import store from '../store'

const Container = styled(Box)`
  padding: 1em;
  max-width: 400px;
  margin: auto;
`

const Form = styled.form`
  > div + div {
    margin-top: 1em;
  }
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
      <h2>Fancy - Login</h2>

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
