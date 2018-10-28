import { interval } from "rxjs"
import { startWith, takeWhile, tap } from "rxjs/operators"

export class Interval {

  private active = false

  constructor(
    private readonly ms: number,
    private readonly callback: (tick: number) => void,
  ) { }

  enable() {
    if (!this.active) {
      this.active = true
      interval(this.ms).pipe(
        startWith(0),
        takeWhile(() => this.active),
        tap(tick => this.callback(tick)),
      ).subscribe()
    }
  }

  disable() {
    if (this.active) {
      this.active = false
    }
  }

}
