import { Component, OnInit, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message("1", "Test", "Hello", "Ben"),
    new Message("2", "How are you?", "How's it going?", "Ben"),
    new Message("3", "Cool", "Cool, cool, cool", "Ben"),
  ]

  constructor() { }

  ngOnInit() {

  }

  onAddMessage(message: Message ) {
    this.messages.push(message);
  }

}
