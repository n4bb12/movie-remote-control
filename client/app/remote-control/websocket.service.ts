import { Injectable } from "@angular/core"

import { ReplaySubject } from "rxjs"
import { debounceTime, startWith, throttleTime } from "rxjs/operators"

import { environment } from "../../environments/environment"

const { scheme, host, port } = environment.websocket

export enum Volume {
  DOWN = -1,
  KEEP = 0,
  UP = 1,
}

@Injectable({
  providedIn: "root",
})
export class WebsocketService {

  private readonly connectedSubject = new ReplaySubject<boolean>(1)
  readonly connected = this.connectedSubject.pipe(
    startWith(false),
    debounceTime(1000),
  )

  private readonly url = `${scheme}://${host}:${port}`
  private ws: WebSocket

  constructor() {
    this.connect()
  }

  moveMouse(deltaX: number, deltaY: number, isFinal: boolean) {
    const movement = JSON.stringify({ deltaX, deltaY, isFinal })
    const message = ["MOVE", movement].join("|")
    this.send(message)
  }

  clickMouse() {
    this.send("CLICK")
    this.vibrate()
  }

  tapKey(key: string): void {
    const message = ["KEY", key].join("|")
    this.send(message)
  }

  rewind(): void {
    this.send("REWIND")
    this.vibrate()
  }

  pause(): void {
    this.send("PAUSE")
    this.vibrate()
  }

  fastForward(): void {
    this.send("FAST_FORWARD")
    this.vibrate()
  }

  changeVolume(state: Volume): void {
    if (state) {
      const message = ["VOLUME", state].join("|")
      this.send(message)
      this.vibrate()
    }
  }

  private connect() {
    const ws = this.ws = new WebSocket(this.url)

    ws.onopen = () => {
      console.log("connection opened")
      this.send("PING")
      this.connectedSubject.next(true)
    }

    ws.onmessage = evt => {
      const message = evt.data
      console.log("client received:", message)
    }

    ws.onclose = () => {
      console.log("connection closed, reconnecting in 1s...")
      setTimeout(() => this.connect(), 1000)
      this.connectedSubject.next(false)
    }
  }

  private send(message: string) {
    this.ws.send(message)
    console.log("client sent:", message)
  }

  private vibrate() {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(25)
    }
  }

}
