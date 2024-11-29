import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-outlet.component.html',
  styleUrl: './template-outlet.component.scss'
})
export class TemplateOutletComponent {

  arr = [1,2,3,4]
}
