import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexSlidesComponent } from './flex-slides/flex-slides.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexSlidesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
