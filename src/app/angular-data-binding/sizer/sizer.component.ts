import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-sizer',
    imports: [],
    templateUrl: './sizer.component.html',
    styleUrl: './sizer.component.scss'
})
export class SizerComponent {



  @Input() size:any = 20;
  @Output() sizeChange = new EventEmitter();

  update(){
    this.size = this.size+1;
  }
}
