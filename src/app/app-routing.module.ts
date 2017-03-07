/**
 * Created by chooper on 2/16/17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

import { CitationDetailsComponent } from './citations/citation-details/citation-details.component';
import { CitationListComponent } from './citations/citation-list/citation-list.component';
import { SigninComponent } from './signin/signin.component';
import {EditorComponent} from './editor/editor.component'


const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'citations', component: CitationListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
