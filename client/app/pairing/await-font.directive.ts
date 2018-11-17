import { Directive, ElementRef, Input, OnInit } from "@angular/core"

import * as FontFaceObserver from "fontfaceobserver"

export interface AwaitFontOptions {
  family: string
  weight?: number
  style?: string
  timeout?: number
}

@Directive({
  selector: "[appAwaitFont]",
})
export class AwaitFontDirective implements OnInit {
  @Input("appAwaitFont") options: AwaitFontOptions

  private readonly el: ElementRef

  constructor(el: ElementRef) {
    this.el = el
    el.nativeElement.style.opacity = "0"
    el.nativeElement.style.transition = "0.5s ease-out opacity"
  }

  private showContent = () => {
    this.el.nativeElement.style.opacity = 1
  }

  ngOnInit() {
    const { family, ...options } = this.options
    new FontFaceObserver(family, options)
      .load(null, options.timeout || 200)
      .then(() => {
        this.showContent()
      })
      .catch(error => {
        console.error(error)
        this.showContent()
      })
  }
}
