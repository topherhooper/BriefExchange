import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FileSelectDirective, FileDropDirective} from 'ng2-file-upload';

import {InMemoryDataService}  from './in-memory-data.service';


import {AppComponent}         from './app.component';
import {DashboardComponent}   from './dashboard.component';
import {ProofersComponent}      from './proofers.component';
import {ProoferDetailComponent}  from './proofer-detail.component';
import {ProoferSearchComponent} from './proofer-search.component';
import {ProoferService}          from './proofer.service';
import {UploadComponent} from './upload.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    FileSelectDirective,
    UploadComponent,
    AppComponent,
    DashboardComponent,
    ProoferDetailComponent,
    ProofersComponent,
    ProoferSearchComponent,
  ],
  providers: [ProoferService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
