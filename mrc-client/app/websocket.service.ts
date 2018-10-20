import { Injectable } from "@angular/core"

import { ReplaySubject } from "rxjs"

import { environment } from "../environments/environment"

@Injectable({
  providedIn: "root",
})
export class WebsocketService {

  private ws: WebSocket
  private historyStr = ""

  readonly history = new ReplaySubject<string>(1)

  constructor() {
    const url = `ws://${environment.ws.host}:${environment.ws.port}`
    const ws = this.ws = new WebSocket(url)

    ws.onopen = () => {
      console.log("connection opened")
      this.send("PING")
    }

    ws.onmessage = evt => {
      const message = evt.data
      console.log("client received:", message)
      this.historyStr += "\n" + message
      this.history.next(this.historyStr.trim())
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
