import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const apiKey = environment.apiKey;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: 'tunedModels/jimmy-vzvlcimsbp5e',
// });

// const generationConfig = {
//   temperature: 0.65,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: 'text/plain',
// };

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor() {}

  // async generateResponse(prompt: string) {
  //   const chatSession = model.startChat({
  //     generationConfig,
  //     //TODO: history
  //   });

  //   const result = await chatSession.sendMessage(prompt);
  //   console.log(result.response.text());
  // }
}
