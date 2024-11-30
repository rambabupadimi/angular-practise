import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    //MatFormFieldModule,
     CommonModule,
    // MatInputModule
    ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent  implements OnInit{


    customerForm! : FormGroup;
    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
      this.customerForm = this.fb.group(
        {
          'customers': this.fb.array([
            this.fb.group({
              firstName: new FormControl(),
              lastName: new FormControl()
            })
          ])
        }
      )
    }

    get customersArray() {
      return this.customerForm.controls['customers'] as FormArray;
    }

    add(index:number){
      (this.customerForm.controls['customers'] as FormArray).push(
        this.fb.group({
          firstName: new FormControl(),
          lastName: new FormControl()
        })
      )
    }
    remove(index:number){
      (this.customerForm.controls['customers'] as FormArray).removeAt(index)
    }


}
