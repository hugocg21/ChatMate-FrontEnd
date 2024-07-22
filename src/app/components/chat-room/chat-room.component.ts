import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  chatName: string = '';
  messages = [
    { sender: 'User1', text: 'Hello!' },
    { sender: 'User2', text: 'Hi there!' }
  ];
  messageText: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const chatId = this.route.snapshot.paramMap.get('id');
    this.chatName = `Chat Room ${chatId}`;
  }

  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push({ sender: 'You', text: this.messageText });
      this.messageText = '';
    }
  }
}
