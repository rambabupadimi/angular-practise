import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularLifeCyclesComponent } from './angular-life-cycles/angular-life-cycles.component';

const routes: Routes = [
  {
    path:'',
    component: AngularLifeCyclesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularLifeCyclesRoutingModule { }
