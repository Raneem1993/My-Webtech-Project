import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { RoomService } from 'src/app/services/room.service';
import { Room } from 'src/app/shared/models/room';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.css']
})
export class RoomPageComponent {
  room!: Room;
  constructor(activatedRoute:ActivatedRoute, roomService:RoomService,
    private cartService : CartService, private router: Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.room = roomService.getRoomById(params.id);
    })
  }

  addToCart() {
    this.cartService.addToCart(this.room);
    this.router.navigateByUrl('/cart-page');
  }

}

