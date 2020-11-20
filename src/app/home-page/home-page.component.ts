import { InvitationsService } from './../shared/data/invitations.service';
import { FriendsService } from './../shared/data/friends.service';
import { DialogFindfriendComponent } from './../dialog-findfriend/dialog-findfriend.component';
import { from } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUpdateComponent } from '../dialog-update/dialog-update.component';
import { StorageService } from '../service/storage.service';
import { GetUserService } from '../service/get-user.service';
import { ContactService } from './../service/contact.service';

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
    private userService: GetUserService,
    private contactServiec: ContactService,
    private friendsService: FriendsService,
    private invitationsService: InvitationsService
  ) {}
  userName = this.storageService.get('userName');
  userId = this.storageService.get('userId');
  dataUser: any;
  avatarUrl = '../../assets/shiba1.jpg';
  async ngOnInit(): Promise<void> {
    const resultF = await this.contactServiec.getListFriends({
      id: this.userId,
    });
    const resultI = await this.contactServiec.getListInvitations({
      id: this.userId,
    });
    this.friendsService.setList(resultF.Items);
    this.invitationsService.setList(resultI.Items);
    console.log('init');
  }

  goToChat() {
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
  openFindFriendDialog() {
    const dialogFindFriend = this.dialog.open(DialogFindfriendComponent, {
      width: '350px',
    });
  }

  logOut() {
    this.storageService.removeAll();
    this.router.navigate(['./login']);
  }
}
