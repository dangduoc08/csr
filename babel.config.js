module.exports = function (api) {
  api.cache(true)
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

  return {
    presets,
  }
}