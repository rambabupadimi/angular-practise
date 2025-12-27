import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularPiService {

  constructor(private httpClient: HttpClient){}

  postData = new BehaviorSubject<string | null>(null);
  postDataObservable$ = this.postData.asObservable();


  setPostData(message: string) {
    this.postData.next(message);
  }

  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
  }


}
