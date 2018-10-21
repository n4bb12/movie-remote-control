import express from "express"
import history from "express-history-api-fallback"
import http from "http"
import path from "path"

import { acceptWebsocketConnections } from "./websocket"

const port = process.env.PORT || 3200
const webroot = path.join(__dirname, "..", "client")

const app = express()
const server = new http.Server(app)

acceptWebsocketConnections(server)

app.use(express.static(webroot))
app.use(history("index.html", { root: webroot }))

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})
