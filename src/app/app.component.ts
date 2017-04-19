import { Component } from '@angular/core';

import {MenuItem} from './menu-item';


const MENU_ITEMS: MenuItem[] = [
  { id: 1, title: 'Home', link: '/home' },
  { id: 2, title: 'Events', link: '/events' },
  { id: 3, title: 'Gallery', link: '/gallery'},
  { id: 4, title: 'Contact us', link: '/contact-us'}
];


//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//component class
export class AppComponent {

  //private static
  menuItems = MENU_ITEMS;

  //public
  title: string;
  selectedItem : MenuItem;

  constructor(){
    this.title = 'Tour of Heroes';
    this.selectedItem = this.menuItems[0];
  }

  onSelect(menuItem: MenuItem): void{
    this.selectedItem = menuItem;
  }
}
