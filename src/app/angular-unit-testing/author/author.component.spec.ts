import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthorComponent } from './author.component';
import { AuthorService } from '../author.service';
import { of } from 'rxjs';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';

// creating test suite
describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;
  let service: AuthorService;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorComponent,HttpClientTestingModule],
      providers:[
        AuthorService
      
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance; // create component instance

   // mockAuthService = jasmine.createSpyObj(['getAuthorsList']);
    service = TestBed.inject(AuthorService); // create service instance

   // fixture.detectChanges(); // detect changes in our component (run change detection)
  });

  
  // test case (Arrange / act/ assertion)
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('Fetch data from service and display in UI', fakeAsync(() =>{


  //   // arrange
  //   const authorData:any = [{email:'babu.ramu111@gmail.com'}]
  //   // spyOn - dynamically change allow intercept method call and give result, we are not calling actual method
  //  spyOn(service,'getAuthorsList').and.returnValue(of(authorData))

  //  // mockAuthService.getAuthorsList.and.returnValue(of(authorData));
  //   // action

  //   // service.getAuthorsList().subscribe({
  //   //   next :(result) =>{
  //   //     expect(result).toBe(authorData);
  //   //     expect(service.getAuthorsList).toHaveBeenCalled();
  //   //   }
  //   // })

  //   fixture.detectChanges();

  //   //component.loadAuthors();

  //   tick(); // simulate the  passage time to complete async task

  //   // assertion

  //   fixture.detectChanges();

  //   console.log(fixture.nativeElement);

  //   const listItems = fixture.nativeElement.querySelectorAll('li');
    
  //   console.log('list items --',listItems);

  //   expect(listItems.length).toBe(authorData.length);
  //   expect(listItems[0].textContent).toContain(authorData[0].email);
    

  // }));

});
