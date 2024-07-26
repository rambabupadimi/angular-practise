import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GrandChildComponent  implements OnInit, OnChanges, DoCheck{



  counter = 1;
  
  inc(){
    this.counter = this.counter+1;
  }

  

  ngOnChanges(changes: SimpleChanges): void {
    console.log('GrandChild- on changes');
  }
  ngOnInit(): void {
    console.log('GrandChild- on init');
  }
  ngDoCheck(): void {
    console.log('GrandChild- on docheck');
  }
}
