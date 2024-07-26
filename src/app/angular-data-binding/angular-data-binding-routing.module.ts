import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
{
  path:'',
  component: UserListComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularDataBindingRoutingModule { }
