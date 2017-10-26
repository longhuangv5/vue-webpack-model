'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ORIGIN:'"/api"',
  PARKID:'"76c7fae2b31911e78e60109836b282e1"',
  PATH_ROOT:'"/saas/"',
  IMG_PATH:'"http://192.168.1.160:8080/file/"'
})
