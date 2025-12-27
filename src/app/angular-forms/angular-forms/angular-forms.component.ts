import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { AbstractControl, AsyncValidator, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AlbumService } from '../../angular-posts/state/albums.service';
import { ActivatedRoute, Router } from '@angular/router';

interface SignUpForm {
  name: FormControl<string | null>;
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

interface User {
  name: string,
  age: number,
  dob: Date,
  address: string
}

@Component({
  selector: 'app-angular-forms',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './angular-forms.component.html',
  styleUrl: './angular-forms.component.scss'
})
export class AngularFormsComponent implements OnInit {

  loginForm: any;
  albums: any = [];
  constructor(private albumService: AlbumService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
    })
  }

  signupForm = new FormGroup<SignUpForm>({
    name: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })

  userInitalState = signal<User>({
    name: '',
    age: 0,
    dob: new Date(),
    address: ''
  })





  ngOnInit(): void {

    this.showAlbums();
  }

  customUsernameValidator(control: AbstractControl) {
    console.log(control.value);
    if (control.value.length > 5) {
      return { 'usernmae-val-1': true }
    }
    return null
  }

  saveLogin() {
    console.log(this.loginForm)
    this.loginForm.markAllAsTouched();
    console.log(this.loginForm.value);
    this.router.navigate(['../posts'], { relativeTo: this.activatedRoute })
  }

  showAlbums() {
    this.albumService.getAlbums().subscribe((result) => {
      this.albums = result;
    })
  }

}


