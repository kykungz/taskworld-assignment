import React from 'react'
import { Route } from 'react-router-dom'

import Preferences from '../pages/Preferences'
import Register from '../pages/Register'
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
  {
    path: '/register',
    component: Register,
  },
]

export default () =>
  routes.map((route, i) => <Route key={i} exact {...route} />)
