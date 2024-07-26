import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GrandChildComponent } from "../grand-child/grand-child.component";

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [GrandChildComponent],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit, OnChanges, DoCheck{

  counter = 1;
  
  inc(){
    this.counter = this.counter+1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child1- on changes');
  }
  ngOnInit(): void {
    console.log('child1- on init');
  }
  ngDoCheck(): void {
    console.log('child1- on docheck');
  }
}
