import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  selector: "app-mousepad",
  templateUrl: "./mousepad.component.html",
  styleUrls: ["./mousepad.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MousepadComponent {

  private isPointerDown = false

  handlePointerdown(e: KeyboardEvent) {
    console.log(e)
    this.isPointerDown = true
  }

  handlePointermove(e: KeyboardEvent) {
    if (this.isPointerDown) {
      console.log(e)
    }
  }

  handlePointerup(e: KeyboardEvent) {
    console.log(e)
    this.isPointerDown = false
  }

}
