import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-cart-item.component.html',
  styleUrl: './app-cart-item.component.css',
})
export class AppCartItemComponent  {

  @ContentChild('tempItem') title! : ElementRef;
  @ContentChildren('item') titleList! : QueryList<ElementRef>;


  onClick() {
    console.log(this.title.nativeElement);
    this.titleList.forEach((item)=>{
        console.log(item.nativeElement);
    });

  }

}
