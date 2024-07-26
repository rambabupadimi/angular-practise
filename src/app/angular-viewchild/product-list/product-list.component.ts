import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {


  @Output() selectedItem = new EventEmitter();

  items = [1,2,3,4,5];

  selectedItemValue = null;
  handleClick(event: any){
    this.selectedItemValue = event;
    console.log(event)
    this.selectedItem.emit(event);
  }

}
