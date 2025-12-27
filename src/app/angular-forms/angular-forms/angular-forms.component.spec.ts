
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFormsComponent } from './angular-forms.component';
import { By } from '@angular/platform-browser';
import { AngularForm } from '../angular-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';


fdescribe('AngularFormsComponent', () => {
  let component: AngularFormsComponent;
  let fixture: ComponentFixture<AngularFormsComponent>;
  let albumServiceSpy: jasmine.SpyObj<AngularForm>;


  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AngularForm',['getAlbums']);
    await TestBed.configureTestingModule({
      imports: [AngularFormsComponent,HttpClientTestingModule],
      providers:[{
        provide: AngularForm, useValue : spy
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularFormsComponent);
    component = fixture.componentInstance;
    albumServiceSpy = TestBed.inject(AngularForm) as jasmine.SpyObj<AngularForm>;
    fixture.detectChanges();
  });

  it('should create form component', () => {
    expect(component).toBeTruthy();
  });

  it('Login form default shoud be invalid', () => {
    expect(component.loginForm.valid).toBeFalse()
  });

  it('Login form default check username & password field should be empty', () => {
      const userName = component.loginForm.controls['username'];
      expect(userName.valid).toBeFalse();

      const password = component.loginForm.controls['password'];
      expect(password.valid).toBeFalse();
  })

    it('Login form  check username & password field required state', () => {
      const userName = component.loginForm.controls['username'];
      const password = component.loginForm.controls['password'];
      userName.setValue('ramu@gamil.com')
      expect(userName.valid).toBeTrue();

      password.setValue('123445');
      expect(password.valid).toBeTrue();
   });


    it('Login form  should be valid when username and password are valid', () => {
      const userName = component.loginForm.controls['username'];
      const password = component.loginForm.controls['password'];
      userName.setValue('ramu@gamil.com')
      password.setValue('123445');
      expect(component.loginForm.valid).toBeTrue();
   });

    it('Login form  should be invalid if any one username, password is  invalid', () => {
      const userName = component.loginForm.controls['username'];
      const password = component.loginForm.controls['password'];
      userName.setValue('')
      password.setValue('123445');
      expect(component.loginForm.valid).toBeFalse();
   });


// integration test

   it('Click on submit button show defaut errors',()=>{
    const submitButton = fixture.debugElement.query(By.css('button')).nativeElement;
    submitButton.click();

    fixture.detectChanges();

    const userNameError = fixture.debugElement.query(By.css('.error-required-username')).nativeElement;
    expect(userNameError).toBeTruthy(); // DOM element exists
    expect(userNameError.textContent).toContain('Username required');

   });


  it('Call album api service and assign to album list', () => {
      const mockAlbums = [
      {
        id: 1,
        userId: 101,
        title: 'one'
      },
      {
        id: 2,
        userId: 201,
        title: 'two'
      }
    ];

    albumServiceSpy.getAlbums.and.returnValue(of(mockAlbums));

  // ✅ Trigger ngOnInit (which calls showAlbums internally)
    // fixture.detectChanges();
    // component.showAlbums();

    //expect(albumServiceSpy.getAlbums).toHaveBeenCalled();
    //expect(component.albums).toEqual(mockAlbums);

  });



  it('check albums',() => {
    // arrange

      const mockAlbums = [{id:1,name:'ra'},{id:2,name:'ba'}];
      albumServiceSpy.getAlbums.and.returnValue(of(mockAlbums));
    // act

    fixture.detectChanges();

    //assert
    expect(albumServiceSpy.getAlbums).toHaveBeenCalled();
    expect(component.albums).equals(mockAlbums);

  })

});
