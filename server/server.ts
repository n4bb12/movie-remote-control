import express from "express"
import history from "express-history-api-fallback"
import http from "http"
import openWithDefaultApp from "opn"

import { acceptWebsocketConnections } from "./websocket"

export interface Options {
  scheme?: string
  host?: string
  port?: number
  webroot: string
  open: boolean
}

export function startServer({
  scheme,
  host,
  port,
  webroot,
  open,
}: Options) {
  return new Promise(resolve => {
    const app = express()
    const server = http.createServer(app)
    const url = `${scheme || "http"}://${host || "localhost"}:${port || 3000}`

    acceptWebsocketConnections(server)

    app.use(express.static(webroot))
    app.use(history("index.html", { root: webroot }))

    const onListen = () => {
      console.log(`Server is listening on ${url}`)
      if (open) {
        openWithDefaultApp(url)
      }
      resolve()
    }

    server.listen(port, onListen)
  })
}
