import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck  {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('header- on changes');
  }
  ngOnInit(): void {
    console.log('header- on init');
  }
  ngDoCheck(): void {
    console.log('header- on docheck');
  }
  
}
