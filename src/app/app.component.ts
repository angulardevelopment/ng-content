import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatContainerComponent } from './chat/components/chat-container';
import { ContextComponent, ProviderComponent } from './chat/context';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, ChatContainerComponent, ProviderComponent, ContextComponent]
})
export class AppComponent {
  title = 'dynamic-content';

  chatItem = {
    message: 'Initial name',
    avatar:
      'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'
  };

  updateChatItem() {
 window.open("https://www.w3schools.com");
    const randomInt = Math.round(Math.random() * 10);
    this.chatItem = {
      message: 'Random ${randomInt}',
      avatar: `https://icon-library.com/images/avatar-icon-images/avatar-icon-images-${randomInt}.jpg`
    };
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker('./app.worker', { type: 'module' });
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}