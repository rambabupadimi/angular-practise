import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsersList() {
   return this.httpClient.get(`https://randomuser.me/api/?results=5`);
  }



}
