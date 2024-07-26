import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularViewEncapsulationParentComponent } from '../angular-view-encapsulation-parent/angular-view-encapsulation-parent.component';
import { AngularViewEncapsulationChild1Component } from '../angular-view-encapsulation-child1/angular-view-encapsulation-child1.component';
import { AngularViewEncapsulationChild2Component } from '../angular-view-encapsulation-child2/angular-view-encapsulation-child2.component';

@Component({
  selector: 'app-angular-view-encapsulation',
  standalone: true,
  imports: [CommonModule, AngularViewEncapsulationParentComponent],
  templateUrl: './angular-view-encapsulation.component.html',
  styleUrl: './angular-view-encapsulation.component.css',
})
export class AngularViewEncapsulationComponent {

}
