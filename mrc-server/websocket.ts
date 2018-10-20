import { Server } from "http"
import WebSocket from "ws"

import { tapKey } from "./robot"

export function acceptWebsocketConnections(server: Server) {
  const wss = new WebSocket.Server({ server })

  wss.on("connection", ws => {
    ws.on("message", (message: string) => {
      console.log("server received: ", message)

      const [command, key] = message.split("|")

      switch (command) {
        case "PING":
          ws.send("PONG")
          break

        case "KEY":
          tapKey(Number.parseInt(key, 10))
          break

        default:
          console.log("unhandled command:", command)
          break
      }
    })
  })
}
