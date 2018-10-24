import { ChangeDetectionStrategy, Component } from "@angular/core"

import { WebsocketService } from "client/app/websocket.service"

@Component({
  selector: "app-volume",
  templateUrl: "./volume.component.html",
  styleUrls: ["./volume.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolumeComponent {

  isPointerDown = false
  sliderBg = "hsl(0, 0%, 33%)"

  constructor(private ws: WebsocketService) { }

  handlePan(e) {
    const knobEl = e.target as HTMLButtonElement
    const sliderEl = knobEl.parentElement.parentElement as HTMLElement

    const range = sliderEl.clientWidth - knobEl.clientWidth
    const delta = e.isFinal ? 0 : Math.max(-0.5 * range, Math.min(0.5 * range, e.deltaX))
    const ratio = Math.min(1, 2 * Math.abs(delta) / range)

    knobEl.style.transform = `translate(${delta}px)`
    this.isPointerDown = !e.isFinal

    const hue = delta < 0 ? 0 : 120
    const saturation = 100 * ratio
    const lightness = 33

    this.sliderBg = `hsl(${hue}, ${saturation}%, ${lightness}%)`

    if (ratio > 0.5) {
      this.ws.changeVolume(Math.sign(delta))
    }
  }

}
