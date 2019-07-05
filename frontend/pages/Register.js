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
  const [confirmPassword, setConfirmPassword] = useState('')

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleFormChange = name => e => {
    setForm({
      ...form,
      [name]: e.target.value.trim(),
    })
  }

  const handleRegister = async e => {
    e.preventDefault()
    if (form.password === form.confirmPassword) {
      await store.register({
        username: form.username,
        email: form.email,
        password: form.password,
      })
    } else {
      alert('Password mismatched')
    }
  }

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleRegister}>
        <div>
          <Label>Username</Label>
          <Input
            value={form.username}
            onChange={handleFormChange('username')}
            autoComplete="username"
          />
        </div>

        <div>
          <Label>Email</Label>
          <Input
            value={form.email}
            onChange={handleFormChange('email')}
            autoComplete="email"
          />
        </div>

        <div>
          <Label>Password</Label>
          <Input
            value={form.password}
            onChange={handleFormChange('password')}
            type="password"
            autoComplete="password"
          />
        </div>

        <div>
          <Label>Confirm Password</Label>
          <Input
            value={form.confirmPassword}
            onChange={handleFormChange('confirmPassword')}
            type="password"
            autoComplete="confirm-password"
          />
        </div>

        <div>
          <AccentButton block type="submit">
            Register
          </AccentButton>
        </div>
      </Form>
    </Container>
  )
})
