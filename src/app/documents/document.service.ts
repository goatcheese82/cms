import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  documentListChangedEvent = new Subject<Document[]>();
  documents: Document[] = [];
  maxDocumentId: number;
  documentSelectedEvent = new EventEmitter<Document>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Document[] {
    return this.documents.slice(); // Return a copy of the documents array
  }

  getDocument(id: string): Document | undefined {
    return this.documents.find((doc) => doc.id === id); // Find document by id
  }

  getMaxId(): number {
    let maxId: number = 0;

    this.documents.forEach((doc) => {
      const currentId = parseInt(doc.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    });

    return maxId;
  }

  addDocument(newDocument: Document): void {
    if (newDocument === undefined || newDocument === null) {
      return;
    }

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);

    // Clone the documents list before notifying
    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  updateDocument(originalDocument: Document, newDocument: Document): void {
    if (
      originalDocument === undefined ||
      originalDocument === null ||
      newDocument === undefined ||
      newDocument === null
    ) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;

    // Clone the documents list before notifying
    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  deleteDocument(document: Document): void {
    if (document === undefined || document === null) {
      return;
    }

    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1); // Remove the document at the index

    // Clone the documents list before notifying
    const documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }
}
