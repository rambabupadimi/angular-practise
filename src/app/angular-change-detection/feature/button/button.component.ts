import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnChanges, OnInit, DoCheck {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('button- on changes');
  }
  ngOnInit(): void {
    console.log('button- on init');
  }
  ngDoCheck(): void {
    console.log('button- on docheck');
  }
}
