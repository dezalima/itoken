import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameRoutingModule } from './frame-routing.module';
import { FrameComponent } from './frame.component';
import { HeaderModule } from 'src/app/ui/header/header.module';
import { SubMenuModule } from 'src/app/ui/sub-menu/sub-menu.module';


@NgModule({
  declarations: [FrameComponent],
  imports: [
    CommonModule,
    FrameRoutingModule,
    HeaderModule,
    SubMenuModule
  ]
})
export class FrameModule { }
