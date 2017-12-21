import { NgModule, ApplicationRef } from '@angular/core'; //se agrega ApplicationRef
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; //Nuevo

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Nuevo
import { HttpModule } from "@angular/http"; //Nuevo

import { routing } from "./app.routing"; //Nuevo

import { AppComponent } from './app.component';
import { CinemaLayoutModule } from "./shared/layout/layout.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CinemaLayoutModule,
    routing
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef){}
 }
