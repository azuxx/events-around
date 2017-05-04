import { Component, Input, OnInit, ViewChild, TemplateRef } from '@angular/core';

import {Section} from '../section';

@Component({
  selector: 'app-conditional-section',
  templateUrl: './conditional-section.component.html',
  styleUrls: ['./conditional-section.component.scss']
})
export class ConditionalSectionComponent implements OnInit {

  @Input() section: Section;

  thenBlock: TemplateRef<any> = null;

  @ViewChild('eventsBlock')
  eventsBlock: TemplateRef<any> = null;
  @ViewChild('galleryBlock')
  galleryBlock: TemplateRef<any> = null;
  @ViewChild('newsletterBlock')
  newsletterBlock: TemplateRef<any> = null;
  @ViewChild('contactUsBlock')
  contactUsBlock: TemplateRef<any> = null;

  constructor() {
  }

  /*used also when getting data async from a Service. Thus Class must implements OnInit interface*/
  ngOnInit() {
    let sectionName:string = this.section.name;
    switch(sectionName){
      case "events":{
        this.thenBlock = this.eventsBlock;
        break;
      }
      case "gallery":{
        this.thenBlock = this.galleryBlock;
        break;
      }
      case "newsletter":{
        this.thenBlock = this.newsletterBlock;
        break;
      }
      case "contact-us":{
        this.thenBlock = this.contactUsBlock;
        break;
      }
    }
  }
}
