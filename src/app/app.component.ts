import { Component } from '@angular/core';

import {MenuItem} from './menu-item';
import {Image} from './image';
import {Section} from './section';


const MENU_ITEMS: MenuItem[] = [
  { id: 1, title: 'Home', link: 'home' },
  { id: 2, title: 'Events', link: 'events' },
  { id: 3, title: 'Gallery', link: 'gallery'},
  { id: 4, title: 'Contact us', link: 'contact-us'}
];

const IMAGES: Image[] = [
  { id: 1, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg',	alt:'orange tree', description: 'Orange is the new black'},
  { id: 2, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg',	alt:'submerged', description: 'Diving the deep'},
  { id: 3, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg',	alt:'look out', description: 'Soul chillout'},
  { id: 4, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg',	alt:'orange tree', description: 'Orange is the new black'},
  { id: 5, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg',	alt:'submerged', description: 'Diving the deep'},
  { id: 6, url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg',	alt:'look out', description: 'Soul chillout'}
];

const HOMESECTIONS: Section[] = [
  { id:1, name:'events', pageRoute: '/events'},
  { id:2, name:'gallery', pageRoute: '/gallery'},
  { id:3, name:'newsletter', pageRoute: null},
  { id:4, name:'contact-us', pageRoute: '/contact-us'}
];

//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//component class
export class AppComponent {

  //public const
  menuItems = MENU_ITEMS;
  images = IMAGES;
  homeSections = HOMESECTIONS;

  //public
  title: string;
  selectedItem : MenuItem;

  constructor(){
    this.title = 'The Jumbotron';
    this.selectedItem = this.menuItems[0];
  }

  onSelect(menuItem: MenuItem): void{
    this.selectedItem = menuItem;
  }
}
