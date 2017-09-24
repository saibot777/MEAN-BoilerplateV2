import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  errorMessage: string;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getContacts()
      .subscribe(contacts => this.contacts = contacts,
        error => this.errorMessage = <any>error);
  }

}
