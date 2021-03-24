import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarCpfComponent } from './buscar-cpf.component';

const routes: Routes = [
  { 
    path: '', 
    component: BuscarCpfComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarCpfRoutingModule { }
