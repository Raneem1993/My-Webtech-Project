import { Injectable } from '@angular/core';
import { sample_rooms, sample_tags } from 'src/data';
import { Room } from '../shared/models/room';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  getALL(): Room[] {
    return sample_rooms;

  }
  getAllRoomsBySearchTerm(searchTerm: string) {
    return this.getALL().filter(room => room.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

  }

  getAllTags(): Tag[] {
    return sample_tags;
  }
  getAllRoomsByTag(tag: string): Room[] {
    return tag === "All" ?
      this.getALL() :
      this.getALL().filter(room => room.tags?.includes(tag));

  }
  getRoomById(roomId: string): Room {
    return this.getALL().find(room => room.id == roomId) ?? new Room();
  }

}
