import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomCacheComponent } from './custom-cache/custom-cache.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path:'',
    component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularCachingRoutingModule { }
