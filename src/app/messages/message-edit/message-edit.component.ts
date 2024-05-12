import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject', { static: false }) subjectRef: ElementRef;
  @ViewChild('msgText', {static: false}) msgTextRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter
  currentSender: string = "Ben Smith"


  constructor() { }

  ngOnInit() {

  }
  onSendMessage() {
    const subject = this.subjectRef.nativeElement.value;
    const msgText = this.subjectRef.nativeElement.value;
    const newMessage = new Message("1", subject, msgText, this.currentSender)

    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.subjectRef.nativeElement.value = "";
    this.msgTextRef.nativeElement.value = "";
  }
}
