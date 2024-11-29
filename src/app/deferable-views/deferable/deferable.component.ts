import { Component } from '@angular/core';
import { DeferableItemComponent } from "../deferable-item/deferable-item.component";

@Component({
  selector: 'app-deferable',
  standalone: true,
  imports: [DeferableItemComponent],
  templateUrl: './deferable.component.html',
  styleUrl: './deferable.component.scss'
})
export class DeferableComponent {


  /**
   * @defer is type of bloc that can be used to defer load the Javascript for components, directive and pipes
   * used inside a component template.
   */


  showInfo = false;


  showAdditionalInfo(){
    this.showInfo = true;

    setTimeout(()=>{
      this.showInfo = true;
      console.log('reset happened');
    },3000)
  }
}
