import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import Separator from './Separator'

const Container = styled(Box)`
  width: 100%;
  max-width: 260px;
  padding: 8px 0;
`

const Item = styled.div`
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  padding: 0.5em 1em;
  cursor: pointer;
  color: ${props => (props.selected ? '#4e4e4e' : '#8a8a8a')};
  background: ${props => (props.selected ? 'rgba(0, 0, 0, 0.05)' : 'inherit')};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`

const StyledSeparator = styled(Separator)`
  margin: 8px 1em;
`

export default () => (
  <Container>
    <Item>Edit Profile</Item>
    <Item selected>Preferences</Item>
    <Item>Password</Item>
    <Item>Notifications</Item>
    <Item>Connected Accounts</Item>
    <Separator />
    <Item>Orders</Item>
    <Item>Payment</Item>
    <Item>Shipping</Item>
    <Separator />
    <Item>Credits & Referrals</Item>
  </Container>
)
