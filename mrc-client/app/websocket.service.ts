import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class WebsocketService {

  private ws: WebSocket

  constructor() {
    const ws = this.ws = new WebSocket("ws://localhost:3000")

    ws.onopen = () => {
      console.log("connection opened")
      this.send("PING")
    }

    ws.onmessage = evt => {
      console.log("client received:", evt.data)
    }

    ws.onclose = () => {
      console.log("connection closed")
    }
  }

  send(message: string) {
    this.ws.send(message)
    console.log("client sent:", message)
  }

}
