import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DetailsComponent } from "../details/details.component";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LoginComponent, DetailsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent  implements  OnChanges, OnInit, DoCheck {

  @Input() counter:any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('main- on changes');
  }
  ngOnInit(): void {
    console.log('main- on init');
  }
  ngDoCheck(): void {
    console.log('main- on docheck');
  }
  onNameChange(e:any){
    console.log(e);
  }
}
