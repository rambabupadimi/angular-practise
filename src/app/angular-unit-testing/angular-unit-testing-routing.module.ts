import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  {
  path:'',
  component: LoginComponent
  },
  {
    path:'author',
    component: AuthorComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularUnitTestingRoutingModule { }
