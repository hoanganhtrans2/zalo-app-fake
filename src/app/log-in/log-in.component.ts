import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor() { }
  hide = true;
  disable = false;
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
}
