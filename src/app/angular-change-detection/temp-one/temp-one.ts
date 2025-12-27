import { Component, EventEmitter, Output } from '@angular/core';
import { TempService } from '../../temp-service';

@Component({
  selector: 'app-temp-one',
  imports: [],
  templateUrl: './temp-one.html',
  styleUrl: './temp-one.scss'
})
export class TempOne {

  constructor(private tempService: TempService){}

 @Output() sendDataEmitter = new EventEmitter();

  sendData() {
    this.sendDataEmitter.next('send'+Math.floor(Math.random()*1000));
    this.tempService.setData('send'+Math.floor(Math.random()*1000));
  }
}
