import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit, OnChanges{
  

  @Input() selectedItemValue : any;
  @Input() productListComponent!: ProductListComponent;


  ngOnInit(): void {
   console.log('on init -- ',this.selectedItemValue);

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes -- ',this.selectedItemValue);
    console.log('on changes product list component-- ',this.productListComponent);
  }
}
