import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core"

import { Interval } from "../Interval"
import { Volume, WebsocketService } from "../websocket.service"

@Component({
  selector: "app-volume",
  templateUrl: "./volume.component.html",
  styleUrls: ["./volume.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolumeComponent implements OnDestroy {

  isPointerDown = false
  sliderBg = "hsl(0, 0%, 33%)"

  private state: Volume = 0
  private readonly volumeInterval = new Interval(250, () => this.ws.changeVolume(this.state))

  constructor(
    private ws: WebsocketService,
  ) { }

  ngOnDestroy() {
    this.volumeInterval.disable()
  }

  handlePan(e: HammerInput) {
    const knobEl = e.target as HTMLButtonElement
    const sliderEl = knobEl.parentElement.parentElement as HTMLElement

    const range = sliderEl.clientWidth - knobEl.clientWidth
    const delta = e.isFinal ? 0 : Math.max(-0.5 * range, Math.min(0.5 * range, e.deltaX))
    const ratio = Math.min(1, 2 * Math.abs(delta) / range)

    knobEl.style.transform = `translate(${delta}px)`

    const hue = delta < 0 ? 12 : 120
    const saturation = 100 * ratio
    const lightness = 33

    this.isPointerDown = !e.isFinal
    this.sliderBg = `hsl(${hue}, ${saturation}%, ${lightness}%)`
    this.state = Math.sign(delta)

    if (ratio > 0.5) {
      this.volumeInterval.enable()
    } else {
      this.volumeInterval.disable()
    }
  }

}
