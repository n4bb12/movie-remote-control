import { Component } from "@angular/core"

import { WebsocketService } from "./websocket.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  recentKeydown = ""
  history = ""

  private isPointerDown = false

  constructor(private ws: WebsocketService) {
  }

  handlePointerdown(e: KeyboardEvent) {
    console.log(e)
    this.isPointerDown = true
  }

  handlePointermove(e: KeyboardEvent) {
    if (this.isPointerDown) {
      console.log(e)
    }
  }

  handlePointerup(e: KeyboardEvent) {
    console.log(e)
    this.isPointerDown = false
  }

  handleKeydown(e: KeyboardEvent) {
    e.preventDefault()
    this.pressKey(e.key)
  }

  pressKey(key: string) {
    const data = JSON.stringify({ key })
    const message = ["KEY", data].join("|")
    this.recentKeydown = key
    this.ws.send(message)
  }

}
