import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dynamic-component1',
    imports: [],
    templateUrl: './dynamic-component1.component.html',
    styleUrl: './dynamic-component1.component.scss'
})
export class DynamicComponent1Component {

  @Input() name:any;
}
