import http from 'http'
import path from 'path'
import express from 'express'
import initRoutes from './init-routes.js'
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const app = express()

const DIST_DIR = path.join(__dirname, '..', 'dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))

app.get('/*', (req, res) => {
    res.sendFile(HTML_FILE)
})

initRoutes(app)

const PORT = process.env.PORT

const server = http.createServer(app)

server.listen(PORT, function () {
    console.log('Server running at http://localhost:' + ':' + PORT + '/')
})