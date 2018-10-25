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

  moveMouse(deltaX: number, deltaY: number, isFinal: boolean) {
    const movement = JSON.stringify({ deltaX, deltaY, isFinal })
    const message = ["MOVE", movement].join("|")
    this.send(message)
  }

  clickMouse() {
    this.send("CLICK")
  }

  tapKey(key: string): void {
    const message = ["KEY", key].join("|")
    this.send(message)
  }

  rewind(): void {
    this.send("REWIND")
  }

  pause(): void {
    this.send("PAUSE")
  }

  fastForward(): void {
    this.send("FAST_FORWARD")
  }

  changeVolume(sign: number): void {
    const message = ["VOLUME", sign].join("|")
    this.send(message)
  }

  private send(message: string): void {
    this.ws.send(message)
    console.log("client sent:", message)
  }

}
