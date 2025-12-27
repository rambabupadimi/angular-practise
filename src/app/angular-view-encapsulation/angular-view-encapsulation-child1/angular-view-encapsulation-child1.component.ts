import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-view-encapsulation-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-view-encapsulation-child1.component.html',
  styleUrl: './angular-view-encapsulation-child1.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AngularViewEncapsulationChild1Component {}
