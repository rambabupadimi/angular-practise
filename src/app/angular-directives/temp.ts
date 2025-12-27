import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTemp]'
})
export class Temp {

  constructor(private el: ElementRef) { }

  @HostBinding('style.background') background = "red";

  @HostListener('click')
  onClick() {
    console.log('clicked')
    this.background = 'green';
  }

}
