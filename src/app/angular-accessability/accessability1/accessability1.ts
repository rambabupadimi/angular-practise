import { Component } from '@angular/core';
import { AccessabilityHighlight } from '../accessability-highlight';

@Component({
  selector: 'app-accessability1',
  imports: [AccessabilityHighlight],
  templateUrl: './accessability1.html',
  styleUrl: './accessability1.scss'
})
export class Accessability1 {

  callMe(){
    console.log('called')
  }
}
