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

      switch (command) {
        case "PING":
          send("PONG")
          break

        case "KEY":
          if (data && tap(data)) {
            send("KEY pressed: " + data)
          } else {
            send("KEY not mapped: " + data)
          }
          break

        case "REWIND":
          tap("ArrowLeft")
          tap("Enter") // Amazon Prime
          break

        case "PAUSE":
          tap(" ")
          break

        case "FAST_FORWARD":
          tap("ArrowRight")
          tap("Enter") // Amazon Prime
          break

        case "VOLUME":
          if (data === "-1") {
            tap("ArrowDown")
          } else if (data === "1") {
            tap("ArrowUp")
          } else {
            console.log("unknown VOLUME:", data)
          }
          break

        default:
          console.log("unhandled command:", command)
          break
      }
    })
  })
}
