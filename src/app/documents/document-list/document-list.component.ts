import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelected = new EventEmitter<Document>();
  documents: Document[] = [
    new Document("1", "Software Requirements Specification", "In depth specification of requirements for the project", "https://#.#.com"),
    new Document("2", "Software Proposal", "High level description of project goals", "https://#.#.com"),
    new Document("3", "Contract", "A Contract", "https://#.#.com"),
    new Document("4", "Homework", "Something Random", "https://#.#.com"),
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.documents);
  }

  onDocumentSelected(document: Document) {
    this.documentWasSelected.emit(document);
  }

}
