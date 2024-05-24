import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  documents: Document[] = MOCKDOCUMENTS; // Initialize documents array with MOCKDOCUMENTS data
  documentSelectedEvent = new EventEmitter<Document>();

  constructor() { }

  getDocuments(): Document[] {
    return this.documents.slice(); // Return a copy of the documents array
  }

  getDocument(id: string): Document | undefined {
    return this.documents.find(doc => doc.id === id); // Find document by id
  }
}
