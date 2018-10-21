import { Injectable } from "@angular/core"

import { environment } from "../environments/environment"

@Injectable({
  providedIn: "root",
})
export class WebsocketService {

  private readonly url = `ws://${environment.ws.host}:${environment.ws.port}`
  private ws: WebSocket

  constructor() {
    this.connect()
  }

  private connect() {
    const ws = this.ws = new WebSocket(this.url)

    ws.onopen = () => {
      console.log("connection opened")
      this.send("PING")
    }

    ws.onmessage = evt => {
      const message = evt.data
      console.log("client received:", message)
    }

    ws.onclose = () => {
      console.log("connection closed, reconnecting in 5s...")
      setTimeout(() => this.connect(), 5000)
    }
  }

  send(message: string) {
    this.ws.send(message)
    console.log("client sent:", message)
  }

}
