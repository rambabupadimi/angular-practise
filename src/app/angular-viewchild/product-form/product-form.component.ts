import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {

  @ViewChildren('inputEl') inputElements!: QueryList<ElementRef>;

  onSave(){
     this.inputElements.forEach((item) =>{
      console.log(item.nativeElement.value);
     }) 
  }
}
