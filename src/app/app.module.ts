import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

//import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { ConditionalSectionComponent } from './conditional-section/conditional-section.component';


//to add routing logic create an app-routing.module.ts which import RootModule e specifies the routing map. Then here import that module adding its reference in "imports" object property

@NgModule({
  declarations: [
    AppComponent,
    ConditionalSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
