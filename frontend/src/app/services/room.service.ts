import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_rooms, sample_tags } from 'src/data';
import { ROOMS_BY_SEARCH_URL, ROOMS_BY_TAG_URL, ROOMS_TAGS_URL, ROOMS_URL, ROOM_BY_ID_URL } from '../shared/constants/urls';
import { Room } from '../shared/models/room';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  getALL(): Observable<Room[]> {
    return this.http.get<Room[]>(ROOMS_URL);

  }


  getAllRoomsBySearchTerm(searchTerm: string): any {
    return this.http.get<Room[]>(ROOMS_BY_SEARCH_URL + searchTerm);

  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ROOMS_TAGS_URL);
  }
  getAllRoomsByTag(tag: string): Observable<Room[]> {
    return tag === "All" ?
      this.getALL() :
      this.http.get<Room[]>(ROOMS_BY_TAG_URL  + tag);
  }
  getRoomById(roomId: string): Observable<Room> {
    return this.http.get<Room>(ROOM_BY_ID_URL + roomId);
  }

}
