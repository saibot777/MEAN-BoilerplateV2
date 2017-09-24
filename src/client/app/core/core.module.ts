import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';

import { coreServices } from "./core-collections";
import { ContactsModule } from '../contacts+/contacts.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactsModule
  ],
  exports : [
    CommonModule
  ],
  declarations: [],
  providers: [
     ...coreServices
  ]
})
export class CoreModule { }