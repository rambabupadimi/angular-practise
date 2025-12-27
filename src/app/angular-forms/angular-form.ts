import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularForm {
  constructor(private httpClient: HttpClient) { }

  getAlbums(): Observable<any> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/albums');
  }
}
