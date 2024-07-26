import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { AppComponent } from './feature/app/app.component';

const routes: Routes = [{
  path:'',
  component:AppComponent
},{
  path:'temp',
  component: GrandParentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularChangeDetectionRoutingModule { }
