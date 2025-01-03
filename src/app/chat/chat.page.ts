import { Component, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class ChatPage {
  messages = signal([
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
    { role: 'user', text: 'Hello, how are you?' },
    {
      role: 'model',
      text: "I'm good, how are you? asdasdasdasdasdasdasdasdaa asdasd asdasdas dasdas dasd asdasd",
    },
  ]);

  constructor(private chatService: ChatService) {}
}
