import { Component } from "@angular/core"

import { pairingUrl } from "./url"

@Component({
  selector: "app-pairing",
  templateUrl: "./pairing.component.html",
  styleUrls: ["./pairing.component.scss"],
})
export class PairingComponent {

  readonly url = pairingUrl

}
