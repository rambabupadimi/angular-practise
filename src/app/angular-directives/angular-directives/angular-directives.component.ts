import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCustomDirectiveDirective } from '../angular-custom-directive.directive';
import { StyleDirective } from '../style.directive';
import { UserDirective } from '../user.directive';

@Component({
    selector: 'app-angular-directives',
    imports: [CommonModule, AngularCustomDirectiveDirective, StyleDirective, UserDirective],
    templateUrl: './angular-directives.component.html',
    styleUrl: './angular-directives.component.scss'
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
