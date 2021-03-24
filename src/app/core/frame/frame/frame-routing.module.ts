import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame.component';
import { ROUTES } from '../../routes/routes';

const routes: Routes = [  
  {
  path: '',
  component: FrameComponent,
  children: [...ROUTES],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrameRoutingModule { }
