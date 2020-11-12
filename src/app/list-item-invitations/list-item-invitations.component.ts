import { DialogAddFriendComponent } from './../dialog-add-friend/dialog-add-friend.component';
import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-item-invitations',
  templateUrl: './list-item-invitations.component.html',
  styleUrls: ['./list-item-invitations.component.scss'],
})
export class ListItemInvitationsComponent implements OnInit {
  constructor(
    private contactServiec: ContactService,
    private storageService: StorageService,
    public dialog: MatDialog
  ) {}
  listinvitions = [];
  id = '';
  ngOnInit(): void {
    this.getListFriends();
  }

  async getListFriends(): Promise<any> {
    const id = this.storageService.get('userId');
    const result = await this.contactServiec.getListInvitations({ id: id });
    console.log(result);
    this.listinvitions = result.Items;
  }

  onSelectChange(event): void {
    console.log(event.option.value);
    console.log(event.option);
    this.id = event.option.value.userid;
    const dialogRef = this.dialog.open(DialogAddFriendComponent, {
      width: '450px',
      data: { dataUser: event.option.value },
    });
  }
  donguy() {
    alert('dong y ' + this.id);
  }
}
