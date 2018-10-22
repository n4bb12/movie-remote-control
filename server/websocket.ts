import { Server } from "http"
import WebSocket from "ws"

import { tap } from "./robot"

export function acceptWebsocketConnections(server: Server) {
  const wss = new WebSocket.Server({ server })

  wss.on("connection", ws => {
    function send(message: string) {
      ws.send(message)
      console.log("server sent:", message)
    }

    ws.on("message", (message: string) => {
      console.log("server received:", message)

      const [command, data] = message.split("|")
      const { key } = JSON.parse(data || "{}")

      switch (command) {
        case "PING":
          send("PONG")
          break

        case "KEY":
          if (key && tap(key)) {
            send("KEY pressed: " + data)
          } else {
            send("KEY not mapped: " + data)
          }
          break

        default:
          console.log("unhandled command:", command)
          break
      }
    })
  })
}
