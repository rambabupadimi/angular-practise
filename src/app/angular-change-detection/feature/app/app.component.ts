import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [HeaderComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges, OnInit, DoCheck {


  counter = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('app- on changes');
  }
  ngOnInit(): void {
    console.log('app- on init');
  }
  ngDoCheck(): void {
    console.log('app- on docheck');
  }

  update(){
    this.counter = this.counter+1;
  }

}
