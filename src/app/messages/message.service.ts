import { EventEmitter, Injectable } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = MOCKMESSAGES; // Initialize messages array with MOCKMESSAGES data
  messageChangedEvent = new EventEmitter<Message[]>(); // Event emitter to indicate message list change

  constructor() { }

  getMessages(): Message[] {
    return this.messages.slice(); // Return a copy of the messages array
  }

  getMessage(id: string): Message | undefined {
    return this.messages.find(msg => msg.id === id); // Find message by id
  }

  addMessage(message: Message) {
    this.messages.push(message); // Push new message onto messages array
    this.messageChangedEvent.emit(this.getMessages()); // Emit event with updated messages array
  }
}
