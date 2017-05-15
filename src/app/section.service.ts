import { Injectable } from '@angular/core';

import {Section} from './section';
import {HOMESECTIONS} from './mocks/home-sections';

@Injectable()
export class SectionService {

  getHomeSections(): Promise<Section[]>{
    return Promise.resolve(HOMESECTIONS);
  }

}
