import { Room } from "./room";

export class CartItem {

  constructor( public room:Room){}
  quantity: number = 1;
  price: number = this.room.price;
}
