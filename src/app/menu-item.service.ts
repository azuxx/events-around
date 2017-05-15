import { Injectable } from '@angular/core';

import {MenuItem} from './menu-item';
import {MENU_ITEMS} from './mocks/menu-items';

@Injectable()
export class MenuItemService {

  getMenuItems(): Promise<MenuItem[]>{
    return Promise.resolve(MENU_ITEMS);
  }

}
