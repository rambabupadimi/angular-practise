import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card-reusable',
  imports: [CommonModule],
  templateUrl: './card-reusable.html',
  styleUrl: './card-reusable.scss'
})
export class CardReusable {

 title = input('');
 htmlElement = input<any>();
}
