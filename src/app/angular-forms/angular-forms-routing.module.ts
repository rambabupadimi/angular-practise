import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const routes: Routes = [{
  path:'',
  component:DynamicFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormsRoutingModule { }
