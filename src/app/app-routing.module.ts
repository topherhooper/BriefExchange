/**
 * Created by chooper on 2/16/17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'details', component: ContactDetailsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
