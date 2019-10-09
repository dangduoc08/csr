module.exports = function (api) {
  const isDev = api.env() === 'development'

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        loose: false,
        debug: false,
        targets: 'last 2 version'
      }
    ],
    [
      '@babel/preset-react'
    ]
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ]

  if (!isDev) {
    presets.push([
      'minify',
      {
        keepFnName: false
      }
    ])
  }

  return {
    presets,
    plugins
  }
}