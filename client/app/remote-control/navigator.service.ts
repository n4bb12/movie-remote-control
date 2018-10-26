import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class NavigatorService {

  vibrate() {
    if ("vibrate" in window.navigator) {
      window.navigator.vibrate(25)
    }
  }

}
