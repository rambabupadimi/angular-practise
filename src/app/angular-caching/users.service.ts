import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }
  url = "https://jsonplaceholder.typicode.com/users"
  
  getUsersList() {
    return this.httpClient.get(this.url);
  }
}
