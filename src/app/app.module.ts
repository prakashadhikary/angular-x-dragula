import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragulaModule } from 'ng2-dragula';
import { DisplayGroupComponent } from './display-group/display-group.component';

@NgModule({
  declarations: [AppComponent, DragDropComponent, DisplayGroupComponent],
  imports: [BrowserModule, AppRoutingModule, DragulaModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
