import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCustomDirectiveDirective } from '../angular-custom-directive.directive';
import { StyleDirective } from '../style.directive';
import { BackgroundColorDirective } from '../background-color.directive';
import { ColorDirective } from '../color.directive';
import { FontWeightDirective } from '../font-weight.directive';
import { ClickEmitDirective } from '../click-emit.directive';

@Component({
  selector: 'app-angular-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.scss',
  hostDirectives:[
  BackgroundColorDirective
  ]


})
export class AngularDirectivesComponent {

  items = [1,2,3];
  day = 4;
  color= 'blue';

  onSelect(value:any) {
    console.log(value);
  }

  showAlert(value:any){
    console.log(value);
  }
}
