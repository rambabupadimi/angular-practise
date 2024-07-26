import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SizerComponent } from '../sizer/sizer.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, SizerComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {


  message = "Rambabu";

  propertyBindingMessage = '<p>Hello</p>';

  name="Ramu";

  size = 20;


  update(){
    this.size = this.size+1;
  }

  changeSize(){
    this.size = this.size+1;
    //this.sizeChange.emit(this.size);
  }

}
