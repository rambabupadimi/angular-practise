import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private httpClient: HttpClient) { }

  getAuthorsList() {
    return this.httpClient.get(`https://randomuser.me/api/?results=5`).pipe(
      catchError(()=> throwError(()=> new Error('Error in API')))
    )
   }
}
