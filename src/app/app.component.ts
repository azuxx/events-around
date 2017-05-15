import { Component, OnInit } from '@angular/core';

import {MenuItem} from './menu-item';
import {Image} from './image';
import {Section} from './section';

import {MenuItemService} from './menu-item.service';
import {ImageService} from './image.service';
import {SectionService} from './section.service';

//decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[MenuItemService,ImageService,SectionService]
})
//component class
export class AppComponent implements OnInit{

  //public const
  /*menuItems = MENU_ITEMS;*/

  //public
  title: string;
  selectedItem: MenuItem;
  menuItems: MenuItem[];
  images: Image[];
  homeSections: Section[];

  getMenuItems(): void{
    this.menuItemService.getMenuItems().then(menuItems => {
      this.menuItems = menuItems;
      this.selectedItem = this.menuItems[0];
    });
  }

  getImages(): void{
    this.imageService.getImages().then(images => this.images = images);
  }

  getHomeSections(): void{
    this.sectionService.getHomeSections().then(homeSections => this.homeSections = homeSections);
  }

  constructor(private menuItemService: MenuItemService, private imageService: ImageService, private sectionService: SectionService) {
    this.title = 'The Jumbotron';
  }

  ngOnInit(): void{
    this.getMenuItems();
    this.getImages();
    this.getHomeSections();
  }

  onSelect(menuItem: MenuItem): void {
    this.selectedItem = menuItem;
  }

}
