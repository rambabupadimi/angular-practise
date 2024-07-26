import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDecoratorComponent } from './custom-decorator/custom-decorator.component';
import { printLog } from './print-log-decorator';

const routes: Routes = [{
  path:'',
  component: CustomDecoratorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDecoratorsRoutingModule {

 
 }
