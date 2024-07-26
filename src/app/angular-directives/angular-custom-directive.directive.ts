import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appAngularCustomDirective]',
  standalone: true,
})
export class AngularCustomDirectiveDirective {

  @Input() color: any;
  @Input() opacity: any;

  @Output() selectedItem = new EventEmitter();

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.style.color= this.color;
    this.selectedItem.emit('user clicked');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color="blue";
  }

  @HostListener('mouseout') onMouseOut() {
    this.el.nativeElement.style.color="green";
  }


}
