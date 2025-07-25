import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-control-flows',
  imports: [CommonModule],
  templateUrl: './angular-control-flows.component.html',
  styleUrl: './angular-control-flows.component.scss'
})
export class AngularControlFlowsComponent {

  users = [
    {
      id:1,
      name:'ramu'
    },
    {
      id:2,
      name:'temp'
    }
  ]
}
