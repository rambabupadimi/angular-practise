import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
  export class DetailsComponent implements OnChanges, OnInit, DoCheck {

    ngOnChanges(changes: SimpleChanges): void {
      console.log('details- on changes');
    }
    ngOnInit(): void {
      console.log('details- on init');
    }
    ngDoCheck(): void {
      console.log('details- on docheck');
    }
  }
  
