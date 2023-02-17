import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/shared/models/room';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  rooms:Room[] = [];
  constructor(private roomService:RoomService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.rooms = this.roomService.getAllRoomsBySearchTerm(params.searchTerm);
       else if(params.tag)
       this.rooms = this.roomService.getAllRoomsByTag(params.tag);
       else
       this.rooms = roomService.getALL();

    })

  }




}

