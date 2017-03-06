import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StormpathModule } from 'angular-stormpath';


import { AppComponent } from './app.component';
import { CitationDetailsComponent } from './citations/citation-details/citation-details.component';
import { CitationListComponent } from './citations/citation-list/citation-list.component';
import { SigninComponent } from './signin/signin.component';
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    CitationDetailsComponent,
    CitationListComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StormpathModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
