/**
 * Created by chooper on 2/16/17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}   from './dashboard.component';
import {UploadComponent} from './upload.component';
import {AppComponent} from './app.component';
import {SignupComponent} from './signup.component'


const routes: Routes = [
  // {path: '', redirectTo: '/dashboard', pathMatch: '/full'},
  {path: '', component: DashboardComponent},
  // {path: 'dashboard', component: DashboardComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'signup', component: SignupComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
