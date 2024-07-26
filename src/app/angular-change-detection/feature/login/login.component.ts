import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsComponent } from "../details/details.component";
import { LoginChildComponent } from "../login-child/login-child.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginChildComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent  implements  OnChanges, OnInit, DoCheck{

  ngOnChanges(changes: SimpleChanges): void {
    console.log('login- on changes');
  }
  ngOnInit(): void {
    console.log('login- on init');
  }
  ngDoCheck(): void {
    console.log('login- on docheck');
  }

  onNameChange(e:any){
    console.log(e);
  }
}
