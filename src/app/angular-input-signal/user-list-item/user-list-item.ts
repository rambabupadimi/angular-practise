import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  imports: [],
  templateUrl: './user-list-item.html',
  styleUrl: './user-list-item.scss'
})
export class UserListItem {
  name = input<string>();
  age = input(0,{alias: 'tempAge', transform: (value: number) => value + 1});
}
