import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'
import Preferences from '../pages/Preferences'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/preferences',
    exact: true,
    component: Preferences,
  },
]

export default () => routes.map((route, i) => <Route key={i} {...route} />)
