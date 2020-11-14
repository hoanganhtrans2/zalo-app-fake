import { ContactService } from './../service/contact.service';
import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-list-item-contact',
  templateUrl: './list-item-contact.component.html',
  styleUrls: ['./list-item-contact.component.scss'],
})
export class ListItemContactComponent implements OnInit {
  constructor(
    private contactServiec: ContactService,
    private storageService: StorageService
  ) {}
  selectedOptions: any;
  listUserChat = [];
  ngOnInit(): void {
    this.getListFriends();
  }

  async getListFriends(): Promise<any> {
    const id = this.storageService.get('userId');
    const result = await this.contactServiec.getListFriends({ id: id });
    console.log(result);
    this.listUserChat = result.Items;
  }
  deletefriend() {
    console.log(this.selectedOptions[0]);
  }
}
