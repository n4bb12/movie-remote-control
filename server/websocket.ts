import { Server } from "http"
import WebSocket from "ws"

import { clickMouse, moveMouse, tapKey } from "./robot-actions"
import { Movement } from "./websocket-messages"

let ws: WebSocket

function send(message: string): void {
  ws.send(message)
  console.log("server sent:", message)
}

function receive(message: string): void {
  console.log("server received:", message)
  handleMessage(message)
}

function handleMessage(message: string): void {
  const [command, data] = message.split("|")

  switch (command) {
    case "PING":
      send("PONG")
      break

    case "MOVE":
      const movement: Movement = JSON.parse(data)
      moveMouse(movement)
      break

    case "CLICK":
      clickMouse()
      break

    case "KEY":
      if (!data || !tapKey(data)) {
        send("KEY not mapped: " + data)
      }
      break

    case "REWIND":
      tapKey("ArrowLeft")
      tapKey("Enter") // Amazon Prime
      break

    case "PAUSE":
      tapKey(" ")
      break

    case "FAST_FORWARD":
      tapKey("ArrowRight")
      tapKey("Enter") // Amazon Prime
      break

    case "VOLUME":
      if (data === "-1") {
        tapKey("ArrowDown")
      } else if (data === "1") {
        tapKey("ArrowUp")
      } else {
        console.log("unknown VOLUME:", data)
      }
      break

    default:
      console.log("unhandled command:", command)
      break
  }
}

export function acceptWebsocketConnections(server: Server) {
  return new WebSocket.Server({ server })
    .on("connection", socket => {
      ws = socket
      ws.on("message", receive)
    })
}
