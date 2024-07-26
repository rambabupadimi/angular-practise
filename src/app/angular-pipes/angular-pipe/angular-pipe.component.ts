import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { AngularCustomPipePipe } from '../angular-custom-pipe.pipe';

@Component({
  selector: 'app-angular-pipe',
  standalone: true,
  imports: [CommonModule, AngularCustomPipePipe],
  templateUrl: './angular-pipe.component.html',
  styleUrl: './angular-pipe.component.css',
})
export class AngularPipeComponent {

  price = "12344.8899";
  currentDate = new Date();
  myObservable = of(10);
  myPromise = Promise.resolve('Hello');
  
  values: string[] = ['apple', 'banana', 'carrot', 'date','think'];

  change(){
    this.price = "12334.9999";
  }

  call(){
    console.log('called method')
  }
}
