import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface User {
  userid: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  getUser(userid:string){
    return this.http.get('http://localhost:3000/api/user/0973048541')
  }
  getHeroes(){
    return this.http.get('http://localhost:3000/api/user/0973048541', {responseType:'json'})
  }
  
}
