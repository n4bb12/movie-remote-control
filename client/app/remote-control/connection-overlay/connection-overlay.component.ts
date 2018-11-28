import { ChangeDetectionStrategy, Component } from "@angular/core"

import { WebsocketService } from "../websocket.service"

@Component({
  selector: "ConnectionOverlay",
  templateUrl: "./connection-overlay.component.html",
  styleUrls: ["./connection-overlay.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectionOverlayComponent {

  readonly connected = this.ws.connected

  constructor(
    private ws: WebsocketService,
  ) {
    this.connected.subscribe(connected => {
      if (!connected) {
        window.blur()
      }
    })
  }

}
