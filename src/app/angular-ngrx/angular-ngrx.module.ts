import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularNgrxRoutingModule } from './angular-ngrx-routing.module';
import { StoreModule } from '@ngrx/store';
import {todosFeatureKey, reducer} from './reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './effects/todos.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularNgrxRoutingModule,
    // EffectsModule.forFeature([TodosEffects])
  ]
})
export class AngularNgrxModule { }
