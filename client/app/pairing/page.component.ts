import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"

import { environment } from "client/environments/environment"
import QRCode from "qrcode"

@Component({
  selector: "app-pairing-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"],
})
export class PageComponent implements OnInit {

  @ViewChild("canvas") canvas: ElementRef
  readonly url = [
    "http://",
    environment.ws.host,
    ":",
    environment.ws.port,
    "/remote-control",
  ].join("")

  ngOnInit() {
    const element = this.canvas.nativeElement
    const url = this.url
    const callback = error => error && console.error(error)

    QRCode.toCanvas(element, url, callback)
  }

}
