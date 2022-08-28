import {
  ContentChildren,
  QueryList,
  Component,
  AfterContentInit,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css'],
})
export class TablistComponent {
  //  return directives
  // @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
  // @ContentChild(‘contentParagraph’) paragraph: ElementRef;

// @ViewChildren(‘input’) inputs: QueryList<ElementRef>;

// onClick(index) {
// this.inputs.toArray()[index].nativeElement.focus();
// }
  // <ng-content></ng-content>
  // ngAfterContentInit() {
    // to run methods of tab component
  //   this.tabList.toArray()[0].printTitle();
  // }
}
