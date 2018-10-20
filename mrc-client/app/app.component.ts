import { Component } from "@angular/core"

import { WebsocketService } from "./websocket.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  recentKeydown = ""

  private isPointerDown = false

  constructor(private ws: WebsocketService) { }

  sendPointerdown(e: KeyboardEvent) {
    console.log(e)
    this.isPointerDown = true
  }

  sendPointermove(e: KeyboardEvent) {
    if (this.isPointerDown) {
      console.log(e)
    }
  }

  sendPointerup(e: KeyboardEvent) {
    console.log(e)
    this.isPointerDown = false
  }

  sendCommand(command: string) {
    this.ws.send(command)
  }

  sendKey(e: KeyboardEvent) {
    console.log(e)
    e.preventDefault()
    const message = ["KEY", JSON.stringify(e.which)].join("|")
    this.ws.send(message)
    this.recentKeydown = e.key || ""
  }

}
