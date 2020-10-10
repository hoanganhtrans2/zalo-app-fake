import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-n10t04n2020',
  templateUrl: './n10t04n2020.component.html',
  styleUrls: ['./n10t04n2020.component.scss']
})
export class N10t04n2020Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  hidden = false;
  isfrend = false;
  listuser=[
    {
      name:"Hoang anh",
      phone:"097531768"
    },
    {
      name:"Hoang em",
      phone:"097537568"
    },
    {
      name:"Hoang anh anh hoang em",
      phone:"097537568"
    },
    {
      name:"Hoang em em hoang anh",
      phone:"097571568"
    },
    {
      name:"Hoang anh",
      phone:"0973048541"
    }
  ]
  toggle(){
    this.hidden = !this.hidden;
  }
  values='';
  find(event: any){
    this.values += event.target.value ;
    const ps = this.listuser.find(x=>x.phone===this.values);
    console.log(ps);
    if(ps.phone.length>0)
      {
        this.isfrend=true;
      }
  }

}
