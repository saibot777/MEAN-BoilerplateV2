import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {contactsComponents, contactsServices} from "./contacts-collections";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    // RouterModule.forChild([
    //   {
    //     path: 'dashboard',
    //     canActivate: [AuthGuardService],
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'main',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'main',
    //         component: DashboardComponent
    //       }
    //     ]
    //   }
    // ])
  ],
  exports : [
    CommonModule
  ],
  declarations: [ ...contactsComponents ],
  providers: [ ...contactsServices ]
})
export class ContactsModule { }