import React from 'react'
import styled from 'styled-components'
import MenuBar from '../components/MenuBar'
import Box from '../components/Box'
import Separator from '../components/Separator'
import Section from '../components/Section'
import Dropdown from '../components/Dropdown'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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

const SectionContainer = styled.div`
  padding: 1em;
`

const SectionSeparator = styled(Separator)`
  margin: 0;
`

const Label = styled.div`
  font-weight: bold;
  color: #4e4e4e;
`

const Hint = styled.small`
  color: #aaa;
`

const Option = styled.div`
  & + & {
    margin-top: 1.5em;
  }
`

const languages = [
  {
    name: 'Thai',
    value: 'th',
  },
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'German',
    value: 'de',
  },
]

const timeZones = [
  {
    name: '(UTC+00:00) UTC',
    value: '+00:00',
  },
  {
    name: '(UTC+01:00) UTC',
    value: '+01:00',
  },
  {
    name: '(UTC+02:00) UTC',
    value: '+02:00',
  },
  {
    name: '(UTC+03:00) UTC',
    value: '+03:00',
  },
]

const currencies = [
  {
    name: 'U.S. dollars ($)',
    value: 'USD',
  },
  {
    name: 'Thai Baht',
    value: 'THB',
  },
]

export default () => (
  <Wrapper>
    <MenuBar />
    <Container>
      <SectionContainer>
        <Title>Edit Preferences</Title>
      </SectionContainer>
      <SectionSeparator />
      <SectionContainer>
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
      </SectionContainer>
    </Container>
  </Wrapper>
)
