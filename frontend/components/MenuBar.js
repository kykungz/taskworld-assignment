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
  display: flex;
  align-items: center;
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  padding: 0.5em 1em;
  cursor: pointer;
  color: ${props => (props.selected ? '#4e4e4e' : '#8a8a8a')};
  background: ${props => (props.selected ? 'rgba(0, 0, 0, 0.05)' : 'inherit')};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  i {
    font-size: 22px;
    margin-right: 6px;
  }
`

const StyledSeparator = styled(Separator)`
  margin: 8px 1em;
`

export default () => (
  <Container>
    <Item>
      <i className="material-icons">account_circle</i>
      Edit Profile
    </Item>
    <Item selected>
      <i className="material-icons">settings_applications</i>
      Preferences
    </Item>
    <Item>
      <i className="material-icons">lock</i>
      Password
    </Item>
    <Item>
      <i className="material-icons">notification_important</i>
      Notifications
    </Item>
    <Item>
      <i className="material-icons">drag_indicator</i>
      Connected Accounts
    </Item>
    <Separator />
    <Item>
      <i className="material-icons">list</i>
      Orders
    </Item>
    <Item>
      <i className="material-icons">credit_card</i>
      Payment
    </Item>
    <Item>
      <i className="material-icons">local_shipping</i>
      Shipping
    </Item>
    <Separator />
    <Item>
      <i className="material-icons">settings_applications</i>
      Credits & Referrals
    </Item>
  </Container>
)
