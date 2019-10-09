import React from 'react'

const Home = React.lazy(() => import('../containers/Home'))
const NotFound = React.lazy(() => import('../containers/NotFound'))
const InternalServerError = React.lazy(() => import('../containers/InternalServerError'))

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
  },
  {
    path: '/500',
    component: InternalServerError,
    key: 'InternalServerError',
    exact: true
  }
]