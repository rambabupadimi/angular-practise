import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grand-parent',
  standalone: true,
  imports: [ParentComponent,CommonModule],
  templateUrl: './grand-parent.component.html',
  styleUrl: './grand-parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandParentComponent  implements OnInit, OnChanges, DoCheck{


  constructor(private changeDetectorRef: ChangeDetectorRef){}

  counter = 1;
  tempArray:any = [2,4];
  timerCount =0;
  promiseResponse:any;

  inc(){
    this.counter = this.counter+1;
  }

  incArray(){
    this.tempArray.push(5);
    console.log(this.tempArray);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('GrandParent- on changes');
  }
  ngOnInit(): void {
    console.log('GrandParent- on init');

    setTimeout(()=>{
      this.timerCount = this.timerCount+1;
      console.log('timer count called');
      this.changeDetectorRef.detectChanges();
    },2000)

    this.getAsyncData();

  }
  ngDoCheck(): void {
    console.log('GrandParent- on docheck');
  }

  async getAsyncData(){
   this.promiseResponse =  await this.displayAsyncData();
  }
  displayAsyncData(){
    return new Promise((resolve,reject) =>{
      resolve('Resolved Promise')
    })
  }
}
