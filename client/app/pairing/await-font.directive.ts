import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from "@angular/core"

import * as FontFaceObserver from "fontfaceobserver"

export interface AwaitFontOptions {
  family: string
  weight?: number
  style?: string
}

@Directive({
  selector: "[appAwaitFont]",
})
export class AwaitFontDirective implements OnInit {

  @Input("appAwaitFont") options: AwaitFontOptions

  @HostBinding("style.opacity")
  opacity = 0

  constructor(el: ElementRef) {
    el.nativeElement.style.opacity = "0"
    el.nativeElement.style.transition = "0.5s ease-out opacity"
  }

  ngOnInit() {
    const { family, ...options } = this.options
    const font = new FontFaceObserver(family, options)
    font.load().then(() => this.opacity = 1)
  }

}
