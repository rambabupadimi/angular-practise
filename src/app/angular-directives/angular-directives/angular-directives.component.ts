import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCustomDirectiveDirective } from '../angular-custom-directive.directive';

@Component({
  selector: 'app-angular-directives',
  standalone: true,
  imports: [CommonModule, AngularCustomDirectiveDirective],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.scss',
})
export class AngularDirectivesComponent {

  items = [1,2,3];
  day = 4;
  color= 'blue';

  onSelect(value:any) {
    console.log(value);
  }
}
