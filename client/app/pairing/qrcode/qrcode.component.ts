import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core"

import { pairingUrl } from "client/app/pairing/url"
import QRCode from "qrcode"

@Component({
  selector: "app-qrcode",
  templateUrl: "./qrcode.component.html",
  styleUrls: ["./qrcode.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrcodeComponent implements OnInit {

  @ViewChild("canvas") canvas: ElementRef

  ngOnInit() {
    const element = this.canvas.nativeElement
    const callback = error => error && console.error(error)

    QRCode.toCanvas(element, pairingUrl, callback)
  }

}
