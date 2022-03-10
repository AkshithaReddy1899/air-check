module.exports = {
  roots: [
    './src/'
  ],
  setupFilesAfterEnv: [
    require.resolve('./tests.setup.js')
  ]
};