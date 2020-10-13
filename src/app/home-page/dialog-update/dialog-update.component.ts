import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { GetUserService } from '../../service/get-user.service'

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.scss']
})
export class DialogUpdateComponent implements OnInit {

  constructor(
     private userService: GetUserService,
     private _formBuilder: FormBuilder
  ) { }
    updateInfoFormGroup: FormGroup;
  username='HoangAnh';
  gioitinh='nam'
  //tesst = new Date(this.tesst);
  ngOnInit(): void {



   // this.tesst='hoanganh';
    this.userService.getHeroes().subscribe(date => console.log(date));
    
  }

}
