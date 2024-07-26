import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularViewEncapsulationChild1Component } from '../angular-view-encapsulation-child1/angular-view-encapsulation-child1.component';
import { AngularViewEncapsulationChild2Component } from '../angular-view-encapsulation-child2/angular-view-encapsulation-child2.component';

@Component({
  selector: 'app-angular-view-encapsulation-parent',
  standalone: true,
  imports: [CommonModule, AngularViewEncapsulationChild1Component,AngularViewEncapsulationChild2Component],
  templateUrl: './angular-view-encapsulation-parent.component.html',
  styleUrl: './angular-view-encapsulation-parent.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class AngularViewEncapsulationParentComponent {}
