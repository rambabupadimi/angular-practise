import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, NgZone, OnInit } from '@angular/core';
import { TempOne } from '../temp-one/temp-one';
import { TempTwo } from '../temp-two/temp-two';
import { ChangeDetect1 } from '../change-detect1/change-detect1';

@Component({
  selector: 'app-change-detect',
  imports: [CommonModule, ChangeDetect1],
  templateUrl: './change-detect.html',
  styleUrl: './change-detect.scss',
   changeDetection: ChangeDetectionStrategy.OnPush

})
export class ChangeDetect implements OnInit, DoCheck {
  counter = 0;

  randomValue:any = 0;
  message = '';
  constructor(private changeDetector: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit(): void {

  }

  handleRecieve(value: string) {
    this.message = value;
  }

  ngDoCheck(): void {
    //this.randomValue = Math.random().toFixed(100);
    //console.log('Do check change detect');
  }

  inc() {
      this.ngZone.runOutsideAngular(() => {

 setTimeout(()=>{
      this.counter = this.counter+1;
      console.log('CHANGE ON PUSH')
      this.changeDetector.markForCheck();
      //this.changeDetector.detectChanges();
    },2000)
  }
      );
    }
}
