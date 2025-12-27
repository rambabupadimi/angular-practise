import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAccessabilityHighlight]'
})
export class AccessabilityHighlight implements AfterViewInit {

  constructor(private readonly elementRef: ElementRef) { }

  ngAfterViewInit(): void {
       this.elementRef.nativeElement.focus();
  }

}
