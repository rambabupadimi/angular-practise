import { Component, Inject, InjectionToken, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularServiceService } from '../angular-service.service';
import { CounterServiceService } from '../counter-service/counter-service.service';

export const LOCALE = new InjectionToken<string>('locale');


@Component({
  selector: 'app-angular-service-c1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-service-c1.component.html',
  styleUrl: './angular-service-c1.component.scss',
   providers: [ 
    {provide: AngularServiceService, useClass: CounterServiceService}, 
    {
    provide: LOCALE,  useValue:'EN', multi:true
   },
   {
    provide: LOCALE,  useValue:'NZ',multi:true
   }
  
  ],
})
export class AngularServiceC1Component {
  count = 0;

  constructor(private angularService: AngularServiceService) {
    console.log(inject(LOCALE));
  }

  increment() {
    this.angularService.increment();
  }

  get() {
    this.count = this.angularService.currentValue();
  }
}
