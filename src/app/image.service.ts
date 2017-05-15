import { Injectable } from '@angular/core';

import {Image} from './image';
import {IMAGES} from './mocks/images';

@Injectable()
export class ImageService {

  getImages(): Promise<Image[]>{
    return Promise.resolve(IMAGES);
  }

}
