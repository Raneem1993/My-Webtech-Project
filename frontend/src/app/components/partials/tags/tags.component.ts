import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(roomService:RoomService){
  roomService.getAllTags().subscribe(serverTags=>{
    this.tags = serverTags;
  });
  }

}
