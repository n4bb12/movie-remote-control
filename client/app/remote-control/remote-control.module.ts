import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule } from "@angular/router"

import { ControlsComponent } from "./controls/controls.component"
import { KeyboardComponent } from "./keyboard/keyboard.component"
import { MousepadComponent } from "./mousepad/mousepad.component"
import { RemoteControlComponent } from "./remote-control.component"
import { VolumeComponent } from "./volume/volume.component"

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: RemoteControlComponent,
      },
    ]),
  ],
  declarations: [
    RemoteControlComponent,
    MousepadComponent,
    ControlsComponent,
    VolumeComponent,
    KeyboardComponent,
  ],
})
export class RemoteControlModule { }
