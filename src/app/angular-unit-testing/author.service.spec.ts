import { TestBed } from '@angular/core/testing';

import { AuthorService } from './author.service';
import { HttpClientTestingModule, HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('AuthorService', () => {
  let service: AuthorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthorService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Get authors List Success',async () =>{

    const apiUrl = 'https://randomuser.me/api/?results=5';
    const expectedData =  {"results":[{"gender":"female","name":{"title":"Mrs","first":"Domna","last":"Polyanskiy"},"location":{"street":{"number":2275,"name":"Yakova Rappoporta"},"city":"Pokrovsk","state":"Hersonska","country":"Ukraine","postcode":68815,"coordinates":{"latitude":"76.6246","longitude":"96.7456"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"domna.polyanskiy@example.com","login":{"uuid":"3ba43cad-a846-472a-846b-db8e0042b6c4","username":"sadswan762","password":"goldfish","salt":"FsADkNsr","md5":"6d2d38421f552fa9f850555f94cacfba","sha1":"ec7b9c80514d224b56eb40caae5ab1461757d600","sha256":"60c81e38a47d1716229aa4d3eeb96b9f4510fadda60e12a27ecd1a7866bf1e10"},"dob":{"date":"1973-10-17T04:06:12.517Z","age":50},"registered":{"date":"2020-12-21T22:16:55.554Z","age":3},"phone":"(066) H17-3739","cell":"(096) R01-5577","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/3.jpg","medium":"https://randomuser.me/api/portraits/med/women/3.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/3.jpg"},"nat":"UA"}],"info":{"seed":"4f0610ee0b554243","results":1,"page":1,"version":"1.4"}};
    
    await service.getAuthorsList().subscribe(data=> expect(data).toEqual(expectedData));

    // check method type
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(expectedData); // push response data
  });


  it('Get authors list failed', async () =>{
   const apiUrl = 'https://randomuser.me/api/?results=5';
   const expectedData = 'Error in API';

   await service.getAuthorsList().subscribe({
    error:(error) => expect(error.message).toEqual(expectedData)
   })

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe('GET');
   req.error(new ErrorEvent('Error in API'));
  });

});
