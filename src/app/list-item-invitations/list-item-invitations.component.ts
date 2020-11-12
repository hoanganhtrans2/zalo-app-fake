import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-list-item-invitations',
  templateUrl: './list-item-invitations.component.html',
  styleUrls: ['./list-item-invitations.component.scss'],
})
export class ListItemInvitationsComponent implements OnInit {
  constructor(
    private contactServiec: ContactService,
    private storageService: StorageService
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

  onWriteonSelectChangerChange(event): void {
    console.log(event.option.value);
    console.log(event.option);
    this.id = event.option.value.userid;
  }
  donguy() {
    alert('dong y ' + this.id);
  }
}
