import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';

const routes: Routes = [
  {
    path:'',
    component: AngularDirectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDirectivesRoutingModule { }
