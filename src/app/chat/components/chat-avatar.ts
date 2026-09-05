import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConsumerComponent } from '../context';

@Component({
  selector: 'app-chat-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <consumer name="ChatContext">
      <ng-template let-value>
        <img width="50" [src]="value.avatar" />
      </ng-template>
    </consumer>
  `,
  imports: [ConsumerComponent]
})
export class ColorAvatarComponent {}
