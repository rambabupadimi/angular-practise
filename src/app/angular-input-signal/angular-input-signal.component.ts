import { Component, signal } from '@angular/core';
import { UserListItem } from './user-list-item/user-list-item';

@Component({
  selector: 'app-angular-input-signal',
  imports: [UserListItem],
  templateUrl: './angular-input-signal.component.html',
  styleUrl: './angular-input-signal.component.scss'
})
export class AngularInputSignalComponent {

  userName = signal<string>('John Doe');
  tempAge = signal<number>(25);

  getName() {
    return 'Hello';
  }

}
