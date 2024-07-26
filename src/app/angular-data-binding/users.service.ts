import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   
  USERS_URL = "https://jsonplaceholder.typicode.com/users";
  POSTS_URL =  "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.USERS_URL);
  }
  
  getPosts(id:number) {
    let url;
    if(id!= -1) {
      url = this.POSTS_URL+'?userId='+id;
    } else{
      url = this.POSTS_URL;
    }
    return this.httpClient.get(url);
  }

}
