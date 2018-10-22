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

  pressKey(key: string) {
    this.ws.pressKey(key)
  }

}
