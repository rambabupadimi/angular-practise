import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontWeight]',
  standalone: true
})
export class FontWeightDirective implements OnChanges{

  @Input() weight!: number;

  constructor(private element: ElementRef, private render2: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.render2.setStyle(this.element.nativeElement,'font-weight',this.weight);
  }

}
