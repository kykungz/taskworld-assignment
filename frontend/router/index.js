import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../pages/Home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
]

export default () => routes.map((route, i) => <Route key={i} {...route} />)
