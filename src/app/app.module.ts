import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { PetListComponent } from './pet-list/pet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PetDisplayComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
