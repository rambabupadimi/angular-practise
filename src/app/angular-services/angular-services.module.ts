import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularServicesRoutingModule } from './angular-services-routing.module';
import { AngularServiceC1Component } from './angular-service-c1/angular-service-c1.component';


@NgModule({
  declarations: [
   ],
  imports: [
    CommonModule,
    AngularServicesRoutingModule
  ]
})
export class AngularServicesModule { }
