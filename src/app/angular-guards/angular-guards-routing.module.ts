import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularGuardsComponent } from './angular-guards/angular-guards.component';

const routes: Routes = [
  {
    path:'',
    component: AngularGuardsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularGuardsRoutingModule { }
