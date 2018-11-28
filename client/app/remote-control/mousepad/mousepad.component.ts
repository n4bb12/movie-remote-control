import { ChangeDetectionStrategy, Component } from "@angular/core"

import { WebsocketService } from "../websocket.service"

@Component({
  selector: "Mousepad",
  templateUrl: "./mousepad.component.html",
  styleUrls: ["./mousepad.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MousepadComponent {

  constructor(
    private ws: WebsocketService,
  ) { }

  handlePan(e: HammerInput) {
    this.ws.moveMouse(e.deltaX, e.deltaY, e.isFinal)
  }

  handleTap(e: HammerInput) {
    this.ws.clickMouse()
  }

}
