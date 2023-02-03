const { defineConfig } = require('@vue/cli-service')
var dotenv = require('dotenv').config({ path: `.env.production` })
require('dotenv-expand')(dotenv)
module.exports = defineConfig({
  transpileDependencies: true
})
