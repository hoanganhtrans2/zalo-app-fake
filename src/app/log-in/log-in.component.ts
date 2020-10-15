import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { LoginModel } from '../shared/model/login.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }
  hide = true;
  disable = false;
  loginModel : LoginModel = new LoginModel();
  ngOnInit(): void {
  }
  hidefc(){
    this.disable = true;
    this.hide = !this.hide;
    setTimeout(()=>{
      this.hide=!this.hide;
      this.disable = false;
    },3000);

  }

  async login(){
    let res = await this.loginService.login(this.loginModel);
    if(res){
      console.log(res);
      this.router.navigate(['./dashboard']);
    }
  }
}
