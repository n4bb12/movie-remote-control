import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "pairing",
        loadChildren: "./pairing/pairing.module#PairingModule",
      },
      {
        path: "remote-control",
        loadChildren: "./remote-control/remote-control.module#RemoteControlModule",
      },
      {
        path: "**",
        redirectTo: "pairing",
      },
    ], {}),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
