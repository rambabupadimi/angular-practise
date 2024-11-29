import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeferableComponent } from './deferable/deferable.component';

const routes: Routes = [
  {
    path:'',
    component: DeferableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeferableViewsRoutingModule { }
