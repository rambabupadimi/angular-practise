import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-header',
    imports: [SearchComponent, ButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck,AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked  {
  ngAfterViewInit(): void {
    console.log('header- aferview init');
  }
  ngAfterViewChecked(): void {
    console.log('header- after view checked');
  }
  ngAfterContentInit(): void {
    console.log('header- after content init');
  }
  ngAfterContentChecked(): void {
    console.log('header- after conent checked');
  }

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
