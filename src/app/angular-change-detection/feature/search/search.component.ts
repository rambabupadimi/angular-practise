import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnChanges, OnInit, DoCheck  {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('search- on changes');
  }
  ngOnInit(): void {
    console.log('search- on init');
  }
  ngDoCheck(): void {
    console.log('search- on docheck');
  }

  onNameChange(e:any){
    console.log(e);
  }
}
