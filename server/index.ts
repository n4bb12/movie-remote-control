import express from "express"
import http from "http"
import path from "path"

import { acceptWebsocketConnections } from "./websocket"

const port = process.env.PORT || 3200
const webroot = path.join(__dirname, "..", "mrc-client")

const app = express()
const server = new http.Server(app)

acceptWebsocketConnections(server)

app.use(express.static(webroot))

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})
