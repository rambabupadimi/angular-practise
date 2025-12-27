import { Component } from '@angular/core';
import { CardReusable } from "./card-reusable/card-reusable";

@Component({
  selector: 'app-angular-reusable',
  imports: [CardReusable],
  templateUrl: './angular-reusable.html',
  styleUrl: './angular-reusable.scss'
})
export class AngularReusable {

}
