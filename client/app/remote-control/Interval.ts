import { interval } from "rxjs"
import { startWith, takeWhile, tap } from "rxjs/operators"

export class Interval {

  private stopped = false

  constructor(
    private readonly ms: number,
    private readonly callback: (tick: number) => void,
  ) { }

  start() {
    this.stopped = false
    interval(this.ms).pipe(
      startWith(0),
      takeWhile(() => !this.stopped),
      tap(tick => this.callback(tick)),
    ).subscribe()
  }

  stop() {
    this.stopped = true
  }

}
