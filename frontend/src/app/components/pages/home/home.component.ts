import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/shared/models/room';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  rooms:Room[] = [];
  constructor(private roomService:RoomService, activatedRoute:ActivatedRoute) {
    let roomsObservable : Observable<Room[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      roomsObservable = this.roomService.getAllRoomsBySearchTerm(params.searchTerm);
       else if(params.tag)
       roomsObservable = this.roomService.getAllRoomsByTag(params.tag);
       else
       roomsObservable = roomService.getALL();

       roomsObservable.subscribe((serverRooms)=>{
         this.rooms = serverRooms;
       })

    })

  }




}

