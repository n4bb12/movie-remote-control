import { ChangeDetectionStrategy, Component } from "@angular/core"

import { Subject } from "rxjs"

import { WebsocketService } from "../websocket.service"

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

  handleKeydown(e) {
    e.preventDefault()
    const key = e.key || e.data
    this.setRecentKeydown(key)
    this.ws.tapKey(key)
  }

  private setRecentKeydown(key: string): void {
    this.recentKeydown.next(key)
    clearTimeout(this.recentKeydownDisplayTimeout)
    this.recentKeydownDisplayTimeout = setTimeout(() => {
      this.recentKeydown.next()
    }, 1000)
  }

}
