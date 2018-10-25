import express from "express"
import history from "express-history-api-fallback"
import getopts from "getopts"
import http from "http"
import opn from "opn"
import path from "path"

import { acceptWebsocketConnections } from "./websocket"

const args = getopts(process.argv.slice(2))
const port = args.port || process.env.PORT || 3000
const webroot = path.join(__dirname, "..", "client")
const url = `http://localhost:${port}`

const app = express()
const server = new http.Server(app)

acceptWebsocketConnections(server)

app.use(express.static(webroot))
app.use(history("index.html", { root: webroot }))

server.listen(port, () => {
  console.log(`Server is listening on ${url}`)
  opn(url)
})
