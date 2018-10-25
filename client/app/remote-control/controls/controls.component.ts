import { ChangeDetectionStrategy, Component } from "@angular/core"

import { NavigatorService } from "client/app/remote-control/navigator.service"
import { WebsocketService } from "client/app/websocket.service"

@Component({
  selector: "app-controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsComponent {

  constructor(
    private navigator: NavigatorService,
    private ws: WebsocketService,
  ) { }

  rewind(): void {
    this.ws.rewind()
    this.navigator.vibrate()
  }

  pause(): void {
    this.ws.pause()
    this.navigator.vibrate()
  }

  fastForward(): void {
    this.ws.fastForward()
    this.navigator.vibrate()
  }

}
