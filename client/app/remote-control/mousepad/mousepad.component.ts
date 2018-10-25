import { ChangeDetectionStrategy, Component } from "@angular/core"

import { WebsocketService } from "client/app/websocket.service"

@Component({
  selector: "app-mousepad",
  templateUrl: "./mousepad.component.html",
  styleUrls: ["./mousepad.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MousepadComponent {

  constructor(private ws: WebsocketService) { }

  handlePan(e: KeyboardEvent) {

    console.log(e)
  }

  handleTap(e: KeyboardEvent) {
    this.ws.click()
    this.vibrate()
  }

  private vibrate() {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(50)
    }
  }

}
