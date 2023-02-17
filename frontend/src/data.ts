import {Room} from './app/shared/models/room';
import { Tag } from './app/shared/models/Tag';

export const sample_rooms: Room[] =
[
  {
    id:'1',
    name:'gry Couch',
    price:300,
    favorite:false,
    origins:['USA'],
    stars: 5.0,
    imageUrl:'assets/Couch.jpg',
    tags: ['Couch','family-couch','living-room'],
    arriveTime:'Tow Weeks',

  },

  {
  id:'2',
  name:'Corner Couch',
  price:230,
  favorite:false,
  origins:['France'],
  stars: 4.0,
  imageUrl:'assets/corner Sofa.jpg',
  tags: ['corner-couch','living-room'],
  arriveTime:'One Week',

},
  {
    id:'3',
    name:'green Couch',
    price:1000,
    favorite: true,
    origins:['France'],
    stars: 2.0,
    imageUrl:'assets/family Couch.jpg',
    tags: ['Couch','family-couch','living-room'],
    arriveTime:'One Week',

  },
  {
    id:'4',
    name:'green Sofa',
    price:200,
    favorite: false,
    origins:['Italy'],
    stars: 3.5,
    imageUrl:'assets/room-3.jpg',
    tags: ['Sofa','living-room'],
    arriveTime:'One Week',

  },
{
  id:'5',
  name:'Sofa-rosa',
  price:250,
  favorite: false,
  origins:['Italy'],
  stars: 3.0,
  imageUrl:'assets/room-4.jpg',
  tags: ['Sofa','rosa-sofa','living-room'],
  arriveTime:'One Week',

},

]

 export const sample_tags: Tag[]=
[

  {name: 'All' , count: 5},
  {name: 'living-room' , count: 5},
  {name: 'Sofa' , count: 3},
  {name: 'Couch', count: 2},
  {name: 'family-couch', count:2},
  {name: 'corner-couch' , count:1},
  {name: 'rosa-sofa' , count:1},

]


