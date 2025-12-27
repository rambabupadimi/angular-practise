import { TestBed } from '@angular/core/testing';

import { AngularForm } from './angular-form';
import { HttpTestingController, HttpClientTestingModule, } from '@angular/common/http/testing';

describe('AngularForm', () => {
  let service: AngularForm;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AngularForm);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests
  });

  it('should fetch albums from API', () => {
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

    service.getAlbums().subscribe((albums) => {
      console.log('ramu--albums',albums);
      expect(albums.length).toBe(2);
      expect(albums).toEqual(mockAlbums);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/albums');
    expect(req.request.method).toBe('GET');
    req.flush(mockAlbums)

  });



});
