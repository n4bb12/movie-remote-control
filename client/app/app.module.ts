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
        loadChildren: () => import("./pairing/pairing.module").then(m => m.PairingModule),
      },
      {
        path: "remote-control",
        loadChildren: () => import("./remote-control/remote-control.module").then(m => m.RemoteControlModule),
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
