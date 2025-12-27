import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrandParentComponent } from './grand-parent/grand-parent.component';
import { AppComponent } from './feature/app/app.component';
import { ChangeDetect } from './change-detect/change-detect';

const routes: Routes = [{
  path:'',
  component:AppComponent
},

{
  path:'temp',
  component: GrandParentComponent
},
{
  path:'change-detect',
  component: ChangeDetect
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularChangeDetectionRoutingModule { }
