import { Directive, ElementRef, HostListener, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective {




  constructor(private element: ElementRef, private render2: Renderer2) { }

  @HostListener('mouseenter')
  mouseEnter() {

    this.render2.setStyle(this.element.nativeElement,'background-color','red');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.render2.setStyle(this.element.nativeElement,'background-color','red');
  }

}
