import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'chat',
        loadComponent: () =>
          import('../chat/chat.page').then((m) => m.ChatPage),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../about/about.page').then((m) => m.AboutPage),
      },

      {
        path: '',
        redirectTo: '/chat',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full',
  },
];
