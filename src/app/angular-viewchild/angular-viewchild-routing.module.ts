import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularViewChildDemoComponent } from './angular-view-child-demo.component';

const routes: Routes = [
  {
    path:'',
    component: AngularViewChildDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularViewchildRoutingModule { }
