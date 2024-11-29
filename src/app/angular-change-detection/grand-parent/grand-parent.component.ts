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

    setTimeout(()=>{

            this.tempArray.push(5);
            this.counter = this.counter+1;
            console.log(this.tempArray,this.counter);
           // this.changeDetectorRef.detectChanges();
    },1000)
   

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

   // this.getAsyncData();

  }
  ngDoCheck(): void {
    console.log('GrandParent- on docheck');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('Grandparent content init');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('Grandparent content init checked');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('Grandparent view init');
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('Grandparent view init checked');
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
