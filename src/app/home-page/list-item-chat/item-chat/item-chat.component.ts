import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss']
})
export class ItemChatComponent implements OnInit {

  constructor() { }
  @Input() name:string;
  @Input() message:string;
  @Input() avatarUrl: string;
  ngOnInit(): void {
  }

}
