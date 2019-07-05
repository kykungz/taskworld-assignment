import React from 'react'

const withIcon = (icon, text) => (
  <span style={{ display: 'flex' }}>
    <i
      style={{ fontSize: '14px', marginRight: '4px' }}
      className="material-icons"
    >
      {icon}
    </i>
    {text}
  </span>
)

export const languages = [
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

export const timeZones = [
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
    name: '(UTC+04:00) UTC',
    value: '+04:00',
  },
  {
    name: '(UTC+05:00) UTC',
    value: '+05:00',
  },
  {
    name: '(UTC+06:00) UTC',
    value: '+06:00',
  },
  {
    name: '(UTC+07:00) UTC',
    value: '+07:00',
  },
]

export const currencies = [
  {
    name: 'U.S. dollars ($)',
    value: 'USD',
  },
  {
    name: 'Thai Baht',
    value: 'THB',
  },
]

export const visibilities = [
  { name: 'Everyone', value: 'everyone' },
  {
    name: withIcon('lock', 'Private'),
    value: 'private',
  },
]

export const messages = [
  { name: 'Everyone', value: 'everyone' },
  { name: 'People you follow', value: 'following' },
  { name: withIcon('lock', 'No one'), value: 'none' },
]
export const autoCategoryOptions = [
  { name: 'Enable', value: 'enabled' },
  { name: 'Disable', value: 'disabled' },
]
