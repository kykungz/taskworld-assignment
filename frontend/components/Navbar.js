import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Badge from './Badge'
import Logo from './Logo'
import { observer } from 'mobx-react'
import store from '../store'

const Wrapper = styled.div`
  background: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2em;
  display: flex;
  padding: 0.5em;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchBox = styled(Input)`
  max-width: 200px;
`

const ProfileContainer = styled.div`
  display: flex;
  color: #8e8e8e;
  align-items: flex-end;
`

const MenuContainer = styled(ProfileContainer)`
  i {
    font-size: 22px;
  }
  > * + * {
    margin-left: 0.5em;
  }
`

const Center = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`

export default observer(() => {
  const loggedIn = !!store.user

  return (
    <Wrapper>
      <Container>
        {loggedIn && <SearchBox placeholder="Search Fancy" />}

        <Logo />

        {loggedIn && (
          <MenuContainer>
            <Badge text="1">
              <i className="material-icons">shopping_cart</i>
            </Badge>
            <i className="material-icons">inbox</i>
            <i className="material-icons">flash_on</i>
            <ProfileContainer>
              <i className="material-icons">person</i>
              <div>You</div>
              <i className="material-icons">arrow_drop_down</i>
            </ProfileContainer>
          </MenuContainer>
        )}
      </Container>
    </Wrapper>
  )
})
