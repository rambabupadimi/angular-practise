import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AppCartComponent } from './app-cart/app-cart.component';
import { AppCartItemComponent } from './app-cart-item/app-cart-item.component';
import { AppTemplateComponent } from './app-template/app-template.component';

@Component({
  selector: 'app-angular-view-child-demo',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductDetailsComponent,ProductFormComponent, AppCartComponent, AppTemplateComponent],
  templateUrl: './angular-view-child-demo.component.html',
  styleUrl: './angular-view-child-demo.component.css',
})
export class AngularViewChildDemoComponent implements OnInit, AfterViewInit {

  @ViewChild('heading') headingRef!: ElementRef;
  @ViewChild('name') nameRef!: ElementRef;

  @ViewChild(ProductListComponent) productListComponent!: any;

  selectedItem = null;

  constructor(private render: Renderer2){

  }

  ngOnInit(): void {
    console.log('init');
  }

  ngAfterViewInit(): void {
  
    this.render.setStyle(this.headingRef.nativeElement, 'color','red');
  }

  selectedListItem(item:any) 
  {
   console.log('selected item --',item);
  // console.log('productlist item  --',this.productListComponent);
    this.selectedItem = item;
  }
  
}
