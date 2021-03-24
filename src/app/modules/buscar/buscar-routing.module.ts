import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar.component';

const routes: Routes = [{ 
  path: '', 
  component: BuscarComponent,
  children: [
    {
      path: '',
       loadChildren: () => import('../form-client/form-client.module').then(m => m.FormClientModule) 
 
    },
    {
      path: 'buscar-cpf',
      loadChildren: () =>
        import(
          '../buscar-cpf/buscar-cpf.module'
        ).then((m) => m.BuscarCpfModule),
    },
    {
      path: 'relatorio',
      loadChildren: () =>
        import(
          '../relatorio/relatorio.module'
        ).then((m) => m.RelatorioModule),
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarRoutingModule { }
