import {
ContentChildren,
QueryList,
Component,
AfterContentInit
} from "@angular/core";
import { TabComponent } from "../tab/tab.component";

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent{

@ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
ngAfterContentInit() {
this.tabList.toArray()[0].printTitle();
}
}