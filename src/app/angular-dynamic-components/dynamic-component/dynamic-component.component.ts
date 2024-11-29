import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent1Component } from '../dynamic-component1/dynamic-component1.component';
import { DynamicComponent2Component } from '../dynamic-component2/dynamic-component2.component';

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.scss'
})
export class DynamicComponentComponent {

  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

  createComponent(){
    this.container.clear();
    const widgetRef = this.container.createComponent(DynamicComponent1Component);
    widgetRef.setInput('name','ramu');
    this.container.createComponent(DynamicComponent2Component);
  }

  showComponents(){
    this.createComponent();
  }

}
