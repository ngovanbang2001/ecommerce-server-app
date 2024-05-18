import http from 'http'
import path from 'path'
import express from 'express'
import initRoutes from './init-routes.js'
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = express()

initRoutes(app)

const PORT = process.env.PORT

const server = http.createServer(app)

server.listen(PORT, function () {
    console.log('Server running at http://localhost:' + ':' + PORT + '/')
})