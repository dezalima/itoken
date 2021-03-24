import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarRoutingModule } from './buscar-routing.module';
import { BuscarComponent } from './buscar.component';
import { HeaderModule } from 'src/app/ui/header/header.module';
import { SubMenuModule } from 'src/app/ui/sub-menu/sub-menu.module';


@NgModule({
  declarations: [BuscarComponent],
  imports: [
    CommonModule,
    BuscarRoutingModule,
    HeaderModule,
    SubMenuModule
  ]
})
export class BuscarModule { }
