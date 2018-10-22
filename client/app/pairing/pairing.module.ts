import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { PairingComponent } from "./pairing.component"
import { QrcodeComponent } from "./qrcode/qrcode.component"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: PairingComponent,
      },
    ]),
  ],
  declarations: [
    PairingComponent,
    QrcodeComponent,
  ],
})
export class PairingModule { }
