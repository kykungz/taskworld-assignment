import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MenuBar from '../components/MenuBar'
import Box from '../components/Box'
import Separator from '../components/Separator'
import Section from '../components/Section'
import Dropdown from '../components/Dropdown'
import RadioButton from '../components/RadioButton'
import AccentButton from '../components/AccentButton'
import Label from '../components/Label'

import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import store from '../store'
import equal from 'fast-deep-equal'

import {
  languages,
  timeZones,
  currencies,
  visibilities,
  messages,
  autoCategoryOptions,
} from '../data'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const Container = styled(Box)`
  margin-left: 1em;
  width: 100%;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #4e4e4e;
`

const TitleContainer = styled.div`
  padding: 1em;
`

const SectionSeparator = styled(Separator)`
  margin: 0;
`

const Hint = styled.div`
  color: #aaa;
  font-size: 14px;
`

const Option = styled.div`
  & + & {
    margin-top: 2em;
  }
`

const RadioContainer = styled.div`
  display: flex;
  margin-top: 12px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default observer(() => {
  const { user } = store
  const [preferences, setPreferences] = useState(null)
  const originalPref = toJS(user && user.preferences)
  const hasChange = !!(preferences && !equal(originalPref, preferences))

  const handleSetPreference = name => e => {
    const value = e.target.value
    setPreferences({
      ...preferences,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    await store.updatePreferences(preferences)
  }

  useEffect(() => {
    if (user) {
      setPreferences(toJS(user.preferences))
    }
  }, [user])

  if (!preferences) return null

  return (
    <Wrapper>
      <MenuBar />
      <Container>
        <TitleContainer>
          <Title>Edit Preferences</Title>
        </TitleContainer>
        <SectionSeparator />
        <Section title="Localization">
          <Option>
            <Label>Language</Label>
            <Dropdown
              value={preferences['language']}
              onChange={handleSetPreference('language')}
            >
              {languages.map(language => (
                <option key={language.value} value={language.value}>
                  {language.name}
                </option>
              ))}
            </Dropdown>
            <Hint>
              Interested in helping translate Fancy?{' '}
              <a href="mailto:jackykongpon@gmail.com">Let us know</a>.
            </Hint>
          </Option>
          <Option>
            <Label>Time zone</Label>
            <Dropdown
              value={preferences['timeZone']}
              onChange={handleSetPreference('timeZone')}
            >
              {timeZones.map(timeZone => (
                <option key={timeZone.value} value={timeZone.value}>
                  {timeZone.name}
                </option>
              ))}
            </Dropdown>
          </Option>
          <Option>
            <Label>Currency</Label>
            <Dropdown
              value={preferences['currency']}
              onChange={handleSetPreference('currency')}
            >
              {currencies.map(currency => (
                <option key={currency.value} value={currency.value}>
                  {currency.name}
                </option>
              ))}
            </Dropdown>
          </Option>
        </Section>
        <SectionSeparator />
        <Section title="Privacy">
          <Option>
            <Label>Profile visibility</Label>
            <Hint>
              Manage who can see your activity, things you fancy, your
              followers, people you follow or in anyone's search result.
            </Hint>
            <RadioContainer>
              {visibilities.map(visibility => (
                <RadioButton
                  name="visibility"
                  key={visibility.value}
                  value={visibility.value}
                  checked={
                    preferences['profileVisibility'] === visibility.value
                  }
                  onChange={handleSetPreference('profileVisibility')}
                >
                  {visibility.name}
                </RadioButton>
              ))}
            </RadioContainer>
          </Option>
          <Option>
            <Label>Messages</Label>
            <Hint>Control who can send you messages.</Hint>
            <RadioContainer>
              {messages.map(message => (
                <RadioButton
                  name="message"
                  key={message.value}
                  value={message.value}
                  checked={preferences['recieveMessages'] === message.value}
                  onChange={handleSetPreference('recieveMessages')}
                >
                  {message.name}
                </RadioButton>
              ))}
            </RadioContainer>
          </Option>
          <Option>
            <Label>Recently viewed</Label>
            <Hint>Manage your Fancy browsing history.</Hint>
            <a href="https://apple.com">Delete all items</a>
          </Option>
        </Section>
        <SectionSeparator />
        <Section title="Content">
          <Option>
            <Label>Category lists</Label>
            <Hint>Automatically add Fancy's items to the Category list.</Hint>
            <RadioContainer>
              {autoCategoryOptions.map(autoCategoryOption => (
                <RadioButton
                  name="autoCategoryOption"
                  key={autoCategoryOption.value}
                  value={autoCategoryOption.value}
                  checked={
                    preferences['autoAddCategoryList'] ===
                    autoCategoryOption.value
                  }
                  onChange={handleSetPreference('autoAddCategoryList')}
                >
                  {autoCategoryOption.name}
                </RadioButton>
              ))}
            </RadioContainer>
          </Option>
        </Section>
        <SectionSeparator />
        <Section>
          <ButtonContainer>
            <AccentButton onClick={handleSubmit} disabled={!hasChange}>
              Save Preferences
            </AccentButton>
          </ButtonContainer>
        </Section>
      </Container>
    </Wrapper>
  )
})
