import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {


  list = ['ramu', 'shyam', 'sita', 'gita'];
  searchText = '';
  @Input() newItem = signal<string>('');
  @Input() newItem1 = '';

  addItem() {
    // if (this.newItem()) {
    //   this.list.push(this.newItem());
    //   this.newItem.set('');
    // }

    if (this.newItem1) {
      this.list.push(this.newItem1);
      this.newItem1 = '';
    }
  }

  get filteredList() {
    return this.list.filter(item => item.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
