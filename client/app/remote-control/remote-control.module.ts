import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { PageComponent } from "./page.component"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: PageComponent,
      },
    ]),
  ],
  declarations: [
    PageComponent,
  ],
})
export class RemoteControlModule { }
