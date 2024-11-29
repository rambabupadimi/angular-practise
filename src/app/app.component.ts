import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent  implements OnInit {


  title = 'angular-practise';

  ngOnInit(): void {
    console.log('called app component');
  }
}
