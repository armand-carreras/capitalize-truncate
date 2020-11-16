import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CapitalizePipe } from "./capitalize.pipe";
import { SmartTruncatePipe } from "./smart-truncate.pipe";
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CapitalizePipe, SmartTruncatePipe, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
