import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {

  constructor() { }

  @Input() tab;
printTitle() {
console.log(this.tab.title);
}

}
