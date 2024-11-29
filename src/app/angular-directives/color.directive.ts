import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective implements OnChanges {

  @Input() color!: string;

  constructor(private element: ElementRef, private render2: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.render2.setStyle(this.element.nativeElement,'color',this.color);
  }

}
