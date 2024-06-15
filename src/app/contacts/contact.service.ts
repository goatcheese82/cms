import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactListChangedEvent = new Subject<Contact[]>();
  contacts: Contact[] = [];
  maxContactId: number;
  contactSelectedEvent = new EventEmitter<Contact>();

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContact(id: string): Contact | null {
    for (let contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getMaxId(): number {
    let maxId: number = 0;

    this.contacts.forEach((contact) => {
      const currentId = parseInt(contact.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    });

    return maxId;
  }

  addContact(newContact: Contact): void {
    if (newContact === undefined || newContact === null) {
      return;
    }

    this.maxContactId++;
    newContact.id = this.maxContactId.toString();
    this.contacts.push(newContact);

    // Clone the contacts list before notifying
    const contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
  }

  updateContact(originalContact: Contact, updatedContact: Contact): void {
    if (
      originalContact === undefined ||
      originalContact === null ||
      updatedContact === undefined ||
      updatedContact === null
    ) {
      return;
    }

    const pos = this.contacts.indexOf(originalContact);
    if (pos < 0) {
      return;
    }

    updatedContact.id = originalContact.id;
    this.contacts[pos] = updatedContact;

    // Clone the contacts list before notifying
    const contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
  }

  deleteContact(contact: Contact): void {
    if (contact === undefined || contact === null) {
      return;
    }

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }

    this.contacts.splice(pos, 1); // Remove the contact at the index

    // Clone the contacts list before notifying
    const contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone);
  }
}

