import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SlideShowComponent } from './components/slide-show/slide-show.component';
import { SlideShowModule } from './components/slide-show/slide-show.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,    
    NgbModule,
    HttpClientModule,
    SlideShowModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
