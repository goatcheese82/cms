import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WindRefService } from '../../../wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css',
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  id: string;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router,
    private windowRefService: WindRefService,
  ) {
    this.nativeWindow = windowRefService.getNativeWindow();
  }
  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = (+params['id']).toString();
        this.document = this.documentService.getDocument(this.id);
      }
    );
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }

}
