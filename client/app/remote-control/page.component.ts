import { Component } from "@angular/core"

import { WebsocketService } from "client/app/websocket.service"
import { Subject } from "rxjs"

@Component({
  selector: "app-remote-control-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
})
export class PageComponent {

  recentKeydown = new Subject<string>()
  private recentKeydownDisplayTimeout = null

  private isPointerDown = false

  constructor(private ws: WebsocketService) { }

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
    this.setRecentKeydown(key)
    this.ws.send(message)
  }

  private setRecentKeydown(key: string): void {
    this.recentKeydown.next(key)
    clearTimeout(this.recentKeydownDisplayTimeout)
    this.recentKeydownDisplayTimeout = setTimeout(() => {
      this.recentKeydown.next()
    }, 1000)
  }

}
