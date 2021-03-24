import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { BuscarCpfComponent } from 'src/app/modules/buscar-cpf/buscar-cpf.component';
import { RelatorioComponent } from 'src/app/modules/relatorio/relatorio.component';


@NgModule({
  declarations: [SubMenuComponent],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    SubMenuComponent
  ]
})
export class SubMenuModule { }
