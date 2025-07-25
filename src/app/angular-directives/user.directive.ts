import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { FontWeightDirective } from './font-weight.directive';

@Directive({
  selector: '[appUser]',
  hostDirectives:[
    {
    directive: FontWeightDirective,
    inputs: ["weight:userFontWeight"]
    }
  ]
})
export class UserDirective {

  constructor(private ref: ElementRef) { }

  @HostBinding('style.border') border:string = 'none';

  @HostListener('click') onClick() {
    this.ref.nativeElement.style.color= "red";

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ref.nativeElement.style.color= "green";
    this.border = '1px solid green';
  }

  @HostListener('mouseout') onMouseOver() {
    this.ref.nativeElement.style.color= "blue";
    this.border = 'none';
  }
}
