import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BehaviorSubject,
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  endWith,
  filter,
  from,
  fromEvent,
  groupBy,
  interval,
  map,
  mergeMap,
  of,
  pairwise,
  reduce,
  scan,
  startWith,
  switchMap,
  takeWhile,
  toArray,
} from 'rxjs';
import { TempService } from '../temp.service';

@Component({
  selector: 'app-angular-rx-js',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-rx-js.component.html',
  styleUrl: './angular-rx-js.component.css',
})
export class AngularRxJsComponent implements OnInit, AfterViewInit {
 
  @ViewChild('inputEl') input:ElementRef | undefined;
  
  constructor(private tempService: TempService){}

  ngOnInit(): void {

    this.tempService.observable.subscribe({
      next:(result)=>{
      //  console.log('room2',result);
      }
    })

    this.tempService.observable.subscribe({
      next:(result)=>{
     //   console.log('room1',result);
      }
    })

    // subject
    
    this.tempService.subject.subscribe({
      next:(result)=>{
        console.log('subject1 - room1',result);
      }
    })

    this.tempService.subject.subscribe({
      next:(result)=>{
        console.log('subject2 - room2',result);
      }
    })

   // this.tempService.subject.next(Math.random());

    // this.operatorObservable();
    // this.operatorBehaviourSubject();
    // this.operatorSubject();
    // this.operatorFilter();
    // this.operatorReduce();
    // this.operatorScan();
    // this.operatorMergeMap();
    // this.operatorStartWith();
    // this.operatorPairWise();
    // this.operatorTakeWhile();
    // this.operatorGroupBy();

   // this.operatorSwitch();

  }



  operatorSwitch() {




      const ob = fromEvent(this.input?.nativeElement,'keydown');

      // of([1,2,3]).subscribe((result) => console.log(result));  
      // from([1,2,3]).subscribe((result) => console.log(result));

      ob.pipe(
        // map((item) => { return item; }),
        //debounceTime(1000),
        switchMap((item:any) => { return item; }))
        .subscribe((result:any) =>{
          console.log(result);
        })
  }


  ngAfterViewInit(): void {
    this.operatorDebounceAndDistinctUntilChanged();
    this.operatorSwitch();
  }
  // observable
  operatorObservable() {
    const observable = new Observable((sub) => {
      sub.next(22);
      sub.next(24);
      sub.next(55);
      // sub.error('Error');
      sub.complete();
    });

    observable.subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  // behaviour subject

  operatorBehaviourSubject() {
    const bSubject = new BehaviorSubject(['10']);
    bSubject.next(['red', 'green', 'yellow']);
    bSubject.next(['red1', 'green1', 'yellow1']);
    bSubject.subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
    bSubject.next(['red2', 'green2', 'yellow2']);
  }

  // subject

  operatorSubject() {
    const bSubject = new Subject();
    bSubject.next(['white', 'black', 'blue']);
    bSubject.next(['white1', 'black1', 'blue1']);
    bSubject.subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed');
      },
    });
    bSubject.next(['white2', 'black2', 'blue2']);
  }

  // filter

  operatorFilter() {
    const filterObservable = new Observable((sub) => {
      sub.next(10);
      sub.next(30);
      sub.next(23);
    });

    filterObservable.pipe(filter((item: any) => item % 2 == 0)).subscribe({
      next: (result) => {
        console.log(result);
      },
    });
  }

  // debounceTime, distinctUntilChanged
  // fromEvent returns observable

  operatorDebounceAndDistinctUntilChanged() {
  
    const searchObservable = fromEvent(this.input?.nativeElement, 'keyup');


    // const inputEl: any = document.querySelector('#nameInput');
    // const searchObservable = fromEvent(inputEl, 'keyup');

    searchObservable.pipe(
      map((event: any) => {
        // console.log(event.target.value);
        return event.target.value;
      }),
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe({
      next:(result)=>{
        console.log(result);
      }
    });
  }


  operatorReduce(){
       of(1,2,3,4).pipe(reduce((total:any,value) =>{ 
        
        console.log('total --'+total, value);
        return total+value })).subscribe((result) =>{console.log(result)})
  }

  operatorScan(){
    of(1,2,3,4).pipe(scan((total:any,value,index) =>{ 
      console.log('index --',index,total,value);
    return total+value 
    })).subscribe((result) =>{console.log(result)})
  }


  operatorMergeMap(){
    const observable1 = of([1,2,3]);
    const observable2 = of([20,21,22]);

    observable1.pipe(mergeMap((event:any) =>{
        return observable2.pipe(map((event2:any) =>{
          return  event +','+event2;
        }))
    })).subscribe((result) =>{
      console.log(result);
    })

  }


  operatorStartWith(){
    of(1,2,3).pipe(startWith(0)).subscribe((result) => {
        console.log(result);
    });

    of(1,2,3).pipe(endWith(0)).subscribe((result) => {
      console.log(result);
  });
  }


  operatorPairWise(){
    const pairwiseObservable = new Observable(subscriber => {
      subscriber.next(23);
      subscriber.next(25);
      subscriber.next(28);
      subscriber.next(28);
      subscriber.next(29);
   });
   pairwiseObservable
     .pipe(pairwise())
     .subscribe(result => {
        console.log(result);
   });
  }


  operatorTakeWhile(){
    const takeWhileObservable =  of(3, 4, 1, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);
        takeWhileObservable.pipe(takeWhile(item => {
            return item <= 5;
        })).subscribe(result => {
            console.log('take while result: ',result);
        });
  }


  operatorGroupBy(){
    const people = [{name : 'John', grade: 'A', age: 25},
                {name : 'Krish', grade: 'B', age: 28},
                {name : 'Mike', grade: 'B', age: 29},
                {name : 'Jack', grade: 'C', age: 31},
                {name : 'Tom', grade: 'D', age:43},
                {name : 'Jim', grade: 'A', age: 29}];

                from(people).pipe(groupBy((persion) => {return persion.grade }),
                mergeMap((group:any) => {return group.pipe(toArray())})).subscribe((result)=> console.log(result))
  }

}
