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
    this.ws.send(JSON.stringify({
      altKey: e.altKey,
      bubbles: e.bubbles,
      cancelBubble: e.cancelBubble,
      cancelable: e.cancelable,
      charCode: e.charCode,
      code: e.code,
      composed: e.composed,
      ctrlKey: e.ctrlKey,
      currentTarget: e.currentTarget,
      defaultPrevented: e.defaultPrevented,
      detail: e.detail,
      eventPhase: e.eventPhase,
      isTrusted: e.isTrusted,
      key: e.key,
      keyCode: e.keyCode,
      location: e.location,
      metaKey: e.metaKey,
      repeat: e.repeat,
      returnValue: e.returnValue,
      shiftKey: e.shiftKey,
      srcElement: e.srcElement,
      target: e.target,
      timeStamp: e.timeStamp,
      type: e.type,
      which: e.which,
    }))
    e.preventDefault()
    this.setRecentKeydown(e.key)
    this.ws.pressKey(e.key)
  }

  private setRecentKeydown(key: string): void {
    this.recentKeydown.next(key)
    clearTimeout(this.recentKeydownDisplayTimeout)
    this.recentKeydownDisplayTimeout = setTimeout(() => {
      this.recentKeydown.next()
    }, 1000)
  }

}
