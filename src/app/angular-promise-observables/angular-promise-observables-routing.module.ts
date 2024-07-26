import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularRxJsComponent } from './angular-rx-js/angular-rx-js.component';

const routes: Routes = [
  {
    path:'',
    component: AngularRxJsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularPromiseObservablesRoutingModule { }
