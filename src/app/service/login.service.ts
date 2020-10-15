import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../shared/model/login.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) { }

  async login(model : LoginModel): Promise<any>{
    const res = await this.http.post<any>('http://localhost:3000/api/login',model).toPromise();
    if(res){
      this.storageService.set('userName', res.Item.user_name);
      this.storageService.set('userId', res.Item.userid);
    }
    return res;
  }
}
