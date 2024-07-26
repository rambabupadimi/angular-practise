import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-angular-view-encapsulation-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-view-encapsulation-child2.component.html',
  styleUrl: './angular-view-encapsulation-child2.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class AngularViewEncapsulationChild2Component {}
