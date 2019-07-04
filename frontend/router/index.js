import React from 'react'
import { Route } from 'react-router-dom'

import Preferences from '../pages/Preferences'
import Login from '../pages/Login'

const routes = [
  {
    path: '/',
    component: Preferences,
  },
  {
    path: '/login',
    component: Login,
  },
]

export default () =>
  routes.map((route, i) => <Route key={i} exact {...route} />)
