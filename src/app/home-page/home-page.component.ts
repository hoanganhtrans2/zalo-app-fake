import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogUpdateComponent } from '../home-page/dialog-update/dialog-update.component';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router,  private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit(): void {}

  goToChat(event : any){
    console.log(event)
    this.router.navigate(['./chat'], { relativeTo: this.route });
  }
  goToContact(){
    this.router.navigate(['./contact'], { relativeTo: this.route });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogUpdateComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }
  
  logOut(){
    this.router.navigate(['./login']);
  }

}
