import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core"

import QrCode from "qrcode"

import { pairingUrl } from "../url"

@Component({
  selector: "QrCode",
  templateUrl: "./qrcode.component.html",
  styleUrls: ["./qrcode.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrCodeComponent implements OnInit {

  @ViewChild("canvas", { static: true }) canvas: ElementRef

  ngOnInit() {
    const element = this.canvas.nativeElement
    const callback = error => error && console.error(error)

    QrCode.toCanvas(element, pairingUrl, callback)
  }

}
