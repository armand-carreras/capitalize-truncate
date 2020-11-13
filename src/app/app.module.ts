import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SmartTruncatePipe } from './smart-truncate.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CapitalizePipe, SmartTruncatePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
