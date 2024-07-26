import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularViewEncapsulationComponent } from './angular-view-encapsulation/angular-view-encapsulation.component';

const routes: Routes = [
  {
    path:'',
    component: AngularViewEncapsulationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularViewEncapsulationRoutingModule { }
