import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';

@Component({
  selector: 'cms-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document;

  constructor(private documentService: DocumentService) { }

  ngOnInit(): void {
    this.documentService.documentSelectedEvent.subscribe((document: Document) => {
      this.selectedDocument = document;
    });
  }
}
