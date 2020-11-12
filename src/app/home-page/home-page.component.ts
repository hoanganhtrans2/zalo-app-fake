import { from } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
import { StorageService } from '../service/storage.service';
import { GetUserService } from '../service/get-user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private storageService: StorageService,
    private userService: GetUserService
  ) {}
  userName = this.storageService.get('userName');
  userId = this.storageService.get('userId');
  dataUser: any;
  avatarUrl = '../../assets/shiba1.jpg';
  ngOnInit(): void {}

  goToChat() {
    console.log(event);
    this.router.navigate(['./chat'], { relativeTo: this.route });
  }
  goToContact() {
    this.router.navigate(['./contact'], { relativeTo: this.route });
  }
  goToAddFriend() {
    this.router.navigate(['./invitations'], { relativeTo: this.route });
  }

  async getCurrentUserInfo() {
    let res = await this.userService.getUserInfo(this.userId);
    if (res) {
      this.dataUser = res.Item;
    }
  }

  async openDialog() {
    await this.getCurrentUserInfo();
    const dialogRef = this.dialog.open(DialogUpdateComponent, {
      width: '450px',
      data: { dataUser: this.dataUser },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  logOut() {
    this.storageService.removeAll();
    this.router.navigate(['./login']);
  }
}
