/**
 * Created by chooper on 2/16/17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent}   from './dashboard.component';
import {ProofersComponent}      from './proofers.component';
import {ProoferDetailComponent}  from './proofer-detail.component';
import {UploadComponent} from './upload.component';


const routes: Routes = [
  {path: '', redirectTo: '/upload', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: ProoferDetailComponent},
  {path: 'proofers', component: ProofersComponent},
  {path: 'upload', component: UploadComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
