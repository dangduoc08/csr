import 'regenerator-runtime/runtime'
import 'core-js/stable'
import 'webpack-hot-middleware/client?reload=true'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
