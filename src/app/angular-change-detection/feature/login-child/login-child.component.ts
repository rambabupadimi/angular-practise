import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login-child',
  standalone: true,
  imports: [],
  templateUrl: './login-child.component.html',
  styleUrl: './login-child.component.scss'
})
export class LoginChildComponent implements  OnChanges, OnInit, DoCheck {

  ngOnChanges(changes: SimpleChanges): void {
    console.log('login-child- on changes');
  }
  ngOnInit(): void {
    console.log('login-child- on init');
  }
  ngDoCheck(): void {
    console.log('login-child- on docheck');
  }
}
