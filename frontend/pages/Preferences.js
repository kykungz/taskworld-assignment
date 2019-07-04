import React from 'react'
import styled from 'styled-components'
import MenuBar from '../components/MenuBar'
import Box from '../components/Box'
import Separator from '../components/Separator'
import Section from '../components/Section'
import Dropdown from '../components/Dropdown'
import RadioButton from '../components/RadioButton'
import AccentButton from '../components/AccentButton'

import { observer } from 'mobx-react'
import store from '../store'

import {
  languages,
  timeZones,
  currencies,
  visibilities,
  messages,
  autoCatagoryOptions,
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

const Label = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #4e4e4e;
  margin-bottom: 0.5em;
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
            <Dropdown>
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
            <Dropdown>
              {timeZones.map(timeZone => (
                <option key={timeZone.value} value={timeZone.value}>
                  {timeZone.name}
                </option>
              ))}
            </Dropdown>
          </Option>
          <Option>
            <Label>Currency</Label>
            <Dropdown>
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
            <Label>Catagory lists</Label>
            <Hint>Automatically add Fancy's items to the Category list.</Hint>
            <RadioContainer>
              {autoCatagoryOptions.map(autoCatagoryOption => (
                <RadioButton
                  name="autoCatagoryOption"
                  key={autoCatagoryOption.value}
                  value={autoCatagoryOption.value}
                >
                  {autoCatagoryOption.name}
                </RadioButton>
              ))}
            </RadioContainer>
          </Option>
        </Section>
        <SectionSeparator />
        <Section>
          <ButtonContainer>
            <AccentButton>Save Preferences</AccentButton>
          </ButtonContainer>
        </Section>
      </Container>
    </Wrapper>
  )
})
