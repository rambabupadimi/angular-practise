import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-forms',
  imports: [ReactiveFormsModule, MatFormFieldModule, CommonModule, MatInputModule],
  templateUrl: './user-forms.component.html',
  styleUrl: './user-forms.component.scss'
})
export class UserFormsComponent implements OnInit {
  userFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      'users': this.fb.array([
        this.fb.group({
          firstName: this.fb.control(''),
          lastName: this.fb.control('')
        })
      ])
    })
  }

  get usersArray() {
   return this.userFormGroup.controls['users'] as FormArray;
  }

  addUser(index: number) {
    this.usersArray.push(
      this.fb.group({
        firstName: this.fb.control(''),
        lastName: this.fb.control('')
      })
    );
  }

  removeUser(index: number) {
    this.usersArray.removeAt(index);
  }

}
