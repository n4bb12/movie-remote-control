import { Component } from "@angular/core"

import { Key } from "ts-keycode-enum"

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
    ws.history.subscribe(history => this.history = history)
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

  handleKey(e: KeyboardEvent) {
    console.log(e)
    e.preventDefault()
    this.recentKeydown = e.key || ""
    this.sendKey(e.which)
  }

  sendKey(key: Key) {
    const message = ["KEY", key].join("|")
    this.ws.send(message)
  }

}
