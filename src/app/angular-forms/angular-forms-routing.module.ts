import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { UserFormsComponent } from './user-forms/user-forms.component';

const routes: Routes = [{
  path:'',
  component:AngularFormsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormsRoutingModule { }
