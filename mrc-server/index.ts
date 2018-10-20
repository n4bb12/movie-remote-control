import express from "express"
import http from "http"
import path from "path"
import WebSocket from "ws"

const port = 3000
const webroot = path.join(__dirname, "..", "mrc-client")

const app = express()
const server = new http.Server(app)
const wss = new WebSocket.Server({ server })

app.use(express.static(webroot))

wss.on("connection", ws => {
  ws.on("message", message => {
    console.log("server received: ", message)
  })
  ws.send("PONG")
})

server.listen(port, () => {
  console.log(`MRC-Server is listening on http://localhost:${port}`)
})
