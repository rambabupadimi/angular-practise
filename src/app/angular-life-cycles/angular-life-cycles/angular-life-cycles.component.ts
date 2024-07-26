import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-angular-life-cycles',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './angular-life-cycles.component.html',
  styleUrl: './angular-life-cycles.component.scss'
})
export class AngularLifeCyclesComponent implements  OnInit, OnChanges, OnDestroy, DoCheck,AfterViewInit, AfterViewChecked, AfterContentInit,AfterContentChecked {

  count = 0;

  numbers:any = [19,20];

  constructor(){
    console.log('constructor called');
  }



  ngOnInit(): void {
    console.log('on init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');

  }
  ngOnDestroy(): void {
    console.log('on destroy');

  }
  ngDoCheck(): void {
    console.log('on do check');
  }
  ngAfterViewInit(): void {
    console.log('after view init');
  }
  ngAfterViewChecked(): void {
    console.log('after onAfterViewChecked');
  }
 
  ngAfterContentInit(): void {
    console.log('after content init ');
  }
  ngAfterContentChecked(): void {
    console.log('after onAfterContentChecked');
  }

  inc(){
    this.count = this.count+1;
  }

  incNumber()
  {
    this.numbers.push[9];
  }

}
