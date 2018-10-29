import express from "express"
import history from "express-history-api-fallback"
import parseArgs from "getopts"
import http from "http"
import open from "opn"
import path from "path"

import { acceptWebsocketConnections } from "./websocket"

const args = parseArgs(process.argv.slice(2))

const scheme = "http"
const host = "localhost"
const port = args.port || process.env.PORT || 3000
const url = `${scheme}://${host}:${port}`
const webroot = path.join(__dirname, "..", "client")

const app = express()
const server = http.createServer(app)

acceptWebsocketConnections(server)

app.use(express.static(webroot))
app.use(history("index.html", { root: webroot }))

const onListen = () => {
  console.log(`Server is listening on ${url}`)
  if (args.open) {
    open(url)
  }
}

server.listen(port, onListen)
