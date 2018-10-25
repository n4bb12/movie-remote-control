import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  selector: "app-mousepad",
  templateUrl: "./mousepad.component.html",
  styleUrls: ["./mousepad.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MousepadComponent {

  handlePan(e: KeyboardEvent) {
    console.log(e)
  }

  handleTap(e: KeyboardEvent) {
    console.log(e)
  }

}
