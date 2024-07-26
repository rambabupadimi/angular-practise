import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit, OnChanges, DoCheck {

  counter = 1;
  
  inc(){
    this.counter = this.counter+1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child2- on changes');
  }
  ngOnInit(): void {
    console.log('child2- on init');
  }
  ngDoCheck(): void {
    console.log('child2- on docheck');
  }
}
