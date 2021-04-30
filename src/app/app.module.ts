import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabComponent } from './tab/tab.component';
import { TablistComponent } from './tablist/tablist.component';
import { Home1Component } from './home1/home1.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent, TablistComponent, Home1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
