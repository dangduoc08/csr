import React from 'react'

const Home = React.lazy(() => import('../containers/Home'))
const NotFound = React.lazy(() => import('../containers/NotFound'))

export default [
  {
    path: '/',
    component: Home,
    key: 'Home',
    exact: true
  },
  {
    path: '/404',
    component: NotFound,
    key: 'NotFound',
    exact: true
  }
]