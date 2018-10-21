import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"

@NgModule({
  declarations: [
    AppComponent,
  ],
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
