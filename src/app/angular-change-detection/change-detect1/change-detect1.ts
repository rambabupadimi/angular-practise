import { Component, DoCheck } from '@angular/core';
import { ChangeDetect2 } from '../change-detect2/change-detect2';

@Component({
  selector: 'app-change-detect1',
  imports: [ChangeDetect2],
  templateUrl: './change-detect1.html',
  styleUrl: './change-detect1.scss'
})
export class ChangeDetect1 implements DoCheck{

  randomValue:any = 0;
  ngDoCheck(): void {
      this.randomValue = Math.random().toFixed(100);
    console.log('Do check change detect1');
  }

}
