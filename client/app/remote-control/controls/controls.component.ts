import { ChangeDetectionStrategy, Component } from "@angular/core"

import { WebsocketService } from "client/app/websocket.service"

@Component({
  selector: "app-controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsComponent {

  constructor(private ws: WebsocketService) { }

  rewind(): void {
    this.ws.rewind()
    this.vibrate()
  }

  pause(): void {
    this.ws.pause()
    this.vibrate()
  }

  fastForward(): void {
    this.ws.fastForward()
    this.vibrate()
  }

  private vibrate() {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(50)
    }
  }

}
