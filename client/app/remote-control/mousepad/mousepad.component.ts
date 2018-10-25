import { ChangeDetectionStrategy, Component } from "@angular/core"

import { NavigatorService } from "client/app/remote-control/navigator.service"
import { WebsocketService } from "client/app/websocket.service"

@Component({
  selector: "app-mousepad",
  templateUrl: "./mousepad.component.html",
  styleUrls: ["./mousepad.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MousepadComponent {

  constructor(
    private navigator: NavigatorService,
    private ws: WebsocketService,
  ) { }

  handlePan(e: KeyboardEvent) {
    // TODO
    console.log(e)
  }

  handleTap(e: KeyboardEvent) {
    this.ws.clickMouse()
    this.navigator.vibrate()
  }

}
