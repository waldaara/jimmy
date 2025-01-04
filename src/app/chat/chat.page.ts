import { Component, signal, ViewChild } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonSpinner,
} from '@ionic/angular/standalone';
import { ChatService } from './chat.service';
import { sendOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    FormsModule,
    IonSpinner,
  ],
})
export class ChatPage {
  @ViewChild('scrollContainer') private scrollContainer: any;

  messages = signal([] as { role: string; text: string; id: number }[]);
  loading = signal(false);

  prompt: string = '';

  constructor(private chatService: ChatService) {
    addIcons({ sendOutline });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  async sendPrompt() {
    if (this.prompt.trim() === '') return;

    this.loading.set(true);

    this.messages.update((messages) => [
      ...messages,
      { role: 'user', text: this.prompt, id: Date.now() },
    ]);

    const message = this.prompt;
    this.prompt = '';

    const response = await this.chatService.generateResponse(message);

    this.messages.update((messages) => [
      ...messages,
      { role: 'model', text: response, id: Date.now() },
    ]);

    this.loading.set(false);
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop =
      this.scrollContainer.nativeElement.scrollHeight;
  }
}
