import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularServiceComponent } from './angular-service/angular-service.component';

const routes: Routes = [
  {
    path:'',
    component: AngularServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularServicesRoutingModule { }


