import { Component, effect, EventEmitter, input, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AngularPiService } from '../angular-pi-service';

@Component({
  selector: 'app-angular-pi-child',
  imports: [],
  templateUrl: './angular-pi-child.html',
  styleUrl: './angular-pi-child.scss'
})
export class AngularPiChild implements OnChanges{


 @Input() message = '';
 @Output() hitMe = new EventEmitter();


 messageInputSignal = input('');

 constructor(private apiService: AngularPiService){

   effect(() => {
    console.log('input changes called effect ',this.messageInputSignal())
    });

    this.apiService.postDataObservable$.subscribe((result) =>{
      console.log(result);
    })
 }

ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
  this.message = changes['message'].currentValue;
}

callMe() {
  this.hitMe.emit(this.message);
}

}
