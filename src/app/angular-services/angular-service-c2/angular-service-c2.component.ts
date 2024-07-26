import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularServiceService } from '../angular-service.service';

@Component({
  selector: 'app-angular-service-c2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-service-c2.component.html',
  styleUrl: './angular-service-c2.component.scss',
   providers:[AngularServiceService]
})
export class AngularServiceC2Component {
  
  count =0;
  constructor(private angularService: AngularServiceService){}
  
  get(){
    this.count = this.angularService.currentValue(); 
  
  }
}
