import { Component } from '@angular/core';
import { ConsumerComponent } from '../context';

@Component({
  selector: 'app-chat-message',
  template: `
    <consumer name="ChatContext">
      <ng-template let-value>
        <h4>{{ value.message }}</h4>
      </ng-template>
    </consumer>
  `,
  imports: [ConsumerComponent]
})
export class ChatMessageComponent {}
