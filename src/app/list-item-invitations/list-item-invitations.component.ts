import { InvitationsService } from './../shared/data/invitations.service';
import { DialogAddFriendComponent } from './../dialog-add-friend/dialog-add-friend.component';
import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-item-invitations',
  templateUrl: './list-item-invitations.component.html',
  styleUrls: ['./list-item-invitations.component.scss'],
})
export class ListItemInvitationsComponent implements OnInit {
  constructor(
    private contactServiec: ContactService,
    private storageService: StorageService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private invitationsService: InvitationsService
  ) {}
  listinvitions = [];
  selectedOptions: any;
  id = '';
  ngOnInit(): void {
    this.listinvitions = this.invitationsService.getList();
    this.getListFriendInvitations();
  }

  async getListFriendInvitations(): Promise<any> {
    const id = this.storageService.get('userId');
    const result = await this.contactServiec.getListInvitations({ id: id });
    this.listinvitions = result.Items;
    this.invitationsService.setList(result.Items);
  }

  onSelectChange(event): void {
    // console.log(event.option.value);
    // console.log(event.option);
    // this.id = event.option.value.userid;
    // const dialogRef = this.dialog.open(DialogAddFriendComponent, {
    //   width: '450px',
    //   data: { dataUser: event.option.value },
    // });
  }
  showinfo() {
    const dialogRef = this.dialog.open(DialogAddFriendComponent, {
      width: '450px',
      data: { dataUser: this.selectedOptions[0] },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.snackBar.open(result, '', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['center'],
        });
        this.getListFriendInvitations();
      }
    });
  }
}
