import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Child1Component } from "../child1/child1.component";
import { Child2Component } from "../child2/child2.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Child1Component, Child2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnChanges, OnInit, DoCheck{
  count =0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent- on changes');
  }
  ngOnInit(): void {
    console.log('parent- on init');
  }
  ngDoCheck(): void {
    console.log('parent- on docheck');
  }

  inc(){
    setTimeout(()=>{
      this.count = this.count+1;
    },1000)


  }

  callMe(){
    console.log('called');
  }
}
