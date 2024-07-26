import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit,AfterContentChecked,  AfterViewInit, AfterViewChecked, OnDestroy, DoCheck {
 
  @Input() message= '';
  @Input() type:any;
  @Input() temData:any = [];

  changeLog:any = [];

 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child - onChanges');
  }
  ngOnInit(): void {
    console.log('Child - onInit',this.message,this.type);
  }

  ngDoCheck(): void {
    console.log('Child - onDoCheck');
    this.changeLog.push('DO Check');
  }
  ngAfterContentInit(): void {
    console.log('Child - onAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Child - onAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('Child - onAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Child - onAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Child - onDestroy');  }

}
