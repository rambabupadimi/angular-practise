import { Directive, EventEmitter, HostListener, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appClickEmit]',
  standalone: true
})
export class ClickEmitDirective implements OnChanges, OnInit{

  @Output() appEmit = new EventEmitter();

  constructor() { }
 
  ngOnInit(): void {

  }

  @HostListener('click') 
  onClick() {
   this.appEmit.emit('App Click');
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
