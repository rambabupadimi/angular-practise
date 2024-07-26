import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidator, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-angular-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.scss'
})
export class AngularFormsComponent  implements OnInit{

  customForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.customForm = this.formBuilder.group({
      students : this.formBuilder.array([
        this.formBuilder.group({
          name : new FormControl('',[Validators.required]),
          email: new FormControl('',{validators: this.customEmailValidator, asyncValidators:this.customEmailAsyncValidator  })
        })
      ])
    });
   console.log(this.customForm)
  }

  get studentsArray() : any{
    const formArray =  this.customForm.controls['students'] as FormArray;
    console.log(formArray);
    return formArray;
  }

  save(){
    console.log(this.customForm.valid);
    console.log(this.customForm.value);
  }

  add(){
    (this.customForm.controls['students'] as FormArray).push(this.formBuilder.group({
      name : new FormControl(''),
      email: new FormControl('')
    }));
  }

  deleteItem(index:number) {
    (this.customForm.controls['students'] as FormArray).removeAt(index);
  }

  customEmailValidator(ctrl: AbstractControl) : ValidationErrors | null{
    console.log(ctrl.value);
    return {'temp':true};
  }


  customEmailAsyncValidator(ctrl: AbstractControl) : Promise<ValidationErrors | null> | Observable<ValidationErrors | null>  {
    console.log(ctrl.value);
    return of(null);
  }

}


