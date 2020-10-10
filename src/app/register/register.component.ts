import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepper} from '@angular/material/stepper';

/** Error when invalid control is dirty, touched, or submitted. */


@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: []
})
export class RegisterComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) {}
  idFormGroup: FormGroup;
  regiterFormGroup: FormGroup;
  isLinear=true;
  isOptional = false;
  hide=true;
  registerbyemail=true;
  rgxemail = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
  rgxphone = "^(03|07|08|09|01[2|6|8|9])+([0-9]{8})$";

  @ViewChild('stepper') stepper: MatStepper;

  ngOnInit() {
    this.idFormGroup = this._formBuilder.group({
      idFormControl:['', Validators.required]
    });
    this.regiterFormGroup = this._formBuilder.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
      confirmPassWord: ['', Validators.required],
      verificationCode: ['', Validators.required],
    });
  }
 
  onValChange(value:any){   
    this.registerbyemail = !this.registerbyemail;
    this.stepper.reset();
  }
}
