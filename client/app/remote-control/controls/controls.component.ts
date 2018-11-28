import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core"

import { Interval } from "../Interval"
import { WebsocketService } from "../websocket.service"

@Component({
  selector: "controls",
  templateUrl: "./controls.component.html",
  styleUrls: ["./controls.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsComponent implements OnDestroy {

  readonly rewindInterval = new Interval(250, () => this.rewind())
  readonly fastForwardInterval = new Interval(250, () => this.fastForward())

  constructor(
    private ws: WebsocketService,
  ) { }

  ngOnDestroy() {
    this.rewindInterval.disable()
    this.fastForwardInterval.disable()
  }

  rewind(): void {
    this.ws.rewind()
  }

  pause(): void {
    this.ws.pause()
  }

  fastForward(): void {
    this.ws.fastForward()
  }

}
