import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularServiceC1Component } from '../angular-service-c1/angular-service-c1.component';
import { AngularServiceC2Component } from '../angular-service-c2/angular-service-c2.component';

@Component({
  selector: 'app-angular-service',
  standalone: true,
  imports: [CommonModule, AngularServiceC1Component, AngularServiceC2Component],
  templateUrl: './angular-service.component.html',
  styleUrl: './angular-service.component.css',
  
  
})
export class AngularServiceComponent {
  constructor(){}
}


// @Injectable({
//     providedIn:'root'
//   })
class UserService {
  doSomething() {
    return 'Hello';
  }
}

class Injector {
  private container = new Map();
 
  constructor(private providers: any[] = []) {
    this.providers.forEach(service => this.container.set(service, new service()));
  }
  
  get(service: any) {
    const serviceInstance = this.container.get(service);
  
    if (!serviceInstance) throw new Error('Service not provided');
  
    return serviceInstance;
  }
}
