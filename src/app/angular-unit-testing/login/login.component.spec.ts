import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
        imports: [LoginComponent,   BrowserAnimationsModule,]
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('[Login] check button text',()=>{
    fixture.detectChanges();
    const login = fixture.debugElement.query(By.css('.login-btn')).nativeElement.innerText;
    expect(login).toBe('Login');
    });

    it('Login - Default form should be invalid',() =>{
        expect(component.loginForm.valid).toBeFalsy()
    });

    it('Email - Check email default should be empty',() =>{
        const email = component.loginForm.controls['username'];
        expect(email.valid).toBeFalsy();

        email.setValue('babu.ramu111@gmail.com');
        expect(email.valid).toBeTruthy();
    });

    it('Email - Email length min should be 4',() =>{
        const email = component.loginForm.controls['username'];
        email.setValue('ram');
        expect(email.valid).toBeFalsy(); 
    });

    it('Password - Check email default should be empty',() =>{
        const password = component.loginForm.controls['password'];
        expect(password.valid).toBeFalsy();

        password.setValue('12345678');
        expect(password.valid).toBeTruthy();
    });

    it('Login - Email empty and password should not be empty',() =>{
        const email = component.loginForm.controls['username'];
        email.setValue('');
        const password = component.loginForm.controls['password'];
        password.setValue('12345678');
        expect(component.loginForm.valid).toBeFalsy();
    });

    it('Login - Email & password should not be empty',() =>{
        const email = component.loginForm.controls['username'];
        email.setValue('babu.ramu111@gmail.com');
        const password = component.loginForm.controls['password'];
        password.setValue('12345678');
        expect(component.loginForm.valid).toBeTruthy();
    });



});

