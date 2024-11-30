import { Directive } from '@angular/core';
import { ColorDirective } from './color.directive';
import { FontWeightDirective } from './font-weight.directive';
import { ClickEmitDirective } from './click-emit.directive';

@Directive({
  selector: '[appStyle]',
  standalone: true,
  hostDirectives :[
    {
      directive : ColorDirective,
      inputs: ['color:mycolor'],
    },
    {
      directive : FontWeightDirective,
      inputs: ['weight:myweight'],
    },
    {
      directive: ClickEmitDirective,
      outputs: ['appEmit:myEmit']
    }
  ]
})
export class StyleDirective {
  constructor() { }
}
