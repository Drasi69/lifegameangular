import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { SquareComponent } from './board/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ControlPanelComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
