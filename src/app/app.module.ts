import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';
import { PresentationService } from './presentation/presentation.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresentationModule,
    BrowserAnimationsModule,
  ],
  providers: [PresentationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
