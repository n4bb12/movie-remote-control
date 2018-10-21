import { Server } from "http"
import WebSocket from "ws"

import { tap } from "./robot"

export function acceptWebsocketConnections(server: Server) {
  const wss = new WebSocket.Server({ server })

  wss.on("connection", ws => {
    ws.on("message", (message: string) => {
      console.log("server received:", message)

      const [command, data] = message.split("|")
      const { key } = JSON.parse(data || "{}")

      switch (command) {
        case "PING":
          ws.send("PONG")
          break

        case "KEY":
          if (tap(key)) {
            ws.send("KEY pressed: " + data)
          } else {
            ws.send("KEY not mapped: " + data)
          }
          break

        default:
          console.log("unhandled command:", command)
          break
      }
    })
  })
}
