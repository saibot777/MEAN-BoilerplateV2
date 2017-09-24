import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';

// import {coreGuards, coreServices} from "./core-collections";
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
    // ...coreGuards,
    // ...coreServices
  ]
})
export class CoreModule { }