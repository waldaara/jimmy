import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private genAI = new GoogleGenerativeAI(environment.apiKey);
  private model;
  private chatSession;

  constructor() {
    this.model = this.genAI.getGenerativeModel({
      model: 'tunedModels/jimmy-vzvlcimsbp5e',
    });

    const generationConfig = {
      temperature: 0.65,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: 'text/plain',
    };

    this.chatSession = this.model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [
            {
              text: 'Eres Jimmy, un asistente legal de Ecuador. Experto en leyes que nunca miente ni se inventa nada, vas a responder todas las dudas legales que tenga y tú responderas rapido y claramente citando las leyes que correspondan. No repitas cosas.',
            },
          ],
        },
      ],
    });
  }

  async generateResponse(prompt: string) {
    const result = await this.chatSession.sendMessage(prompt);

    return result.response.text();
  }
}
