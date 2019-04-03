import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { pipe } from '../junk/pipe';
import { serve } from '../junk/service';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent, pipe, ChildComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [serve],
  bootstrap: [AppComponent]
})
export class AppModule { }
