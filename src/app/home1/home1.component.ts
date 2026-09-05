import { Component, OnInit } from '@angular/core';
import { TablistComponent } from '../tablist/tablist.component';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss'],
  imports: [TablistComponent]
})
export class Home1Component implements OnInit {
  flag = true;
  constructor() {}

  tabs = [];

  ngOnInit() {
    this.tabs = [
      { title: 'First Tab title', content: 'First Tab content' },
      { title: 'Second Tab title', content: 'Second Tab content' },
      { title: 'Third Tab title', content: 'Third Tab content' },
    ];
  }
}
