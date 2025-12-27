import { Component } from '@angular/core';

@Component({
    selector: 'app-deferable-item',
    imports: [],
    templateUrl: './deferable-item.component.html',
    styleUrl: './deferable-item.component.scss',
    standalone: true
})
export class DeferableItemComponent {
  constructor() {
    console.log('DeferableItemComponent initialized');
  }
}
