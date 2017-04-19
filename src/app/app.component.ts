import { Component } from '@angular/core';

import {MenuItem} from './menu-item';

//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
//component class
export class AppComponent {
  title: string;
  menuItems: MenuItem[];
  selectedItem : MenuItem;

  constructor(){
    this.title = 'Tour of Heroes';
    this.menuItems = [
        new MenuItem(1,'Home','/home'),
        new MenuItem(2,'Events','/events'),
        new MenuItem(3,'Gallery','/gallery'),
        new MenuItem(4,'Contact us','/contact-us')
    ];
    this.selectedItem = this.menuItems[0];
  }
}
