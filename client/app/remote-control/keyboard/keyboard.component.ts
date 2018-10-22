import { ChangeDetectionStrategy, Component } from "@angular/core"

import { WebsocketService } from "client/app/websocket.service"
import { Subject } from "rxjs"

@Component({
  selector: "app-keyboard",
  templateUrl: "./keyboard.component.html",
  styleUrls: ["./keyboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardComponent {

  recentKeydown = new Subject<string>()
  private recentKeydownDisplayTimeout = null

  constructor(private ws: WebsocketService) { }

  handleKeydown(e: KeyboardEvent) {
    e.preventDefault()
    const key = e.key
    this.setRecentKeydown(key)
    this.ws.pressKey(key)
  }

  handleInput(e: any) {
    e.preventDefault()
    const key = e.data
    this.setRecentKeydown(key)
    this.ws.pressKey(key)
  }

  private setRecentKeydown(key: string): void {
    this.recentKeydown.next(key)
    clearTimeout(this.recentKeydownDisplayTimeout)
    this.recentKeydownDisplayTimeout = setTimeout(() => {
      this.recentKeydown.next()
    }, 1000)
  }

}
