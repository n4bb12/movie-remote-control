import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { AwaitFontDirective } from "./await-font.directive"
import { PairingComponent } from "./pairing.component"
import { QrCodeComponent } from "./qrcode/qrcode.component"

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
    QrCodeComponent,
    AwaitFontDirective,
  ],
})
export class PairingModule { }
