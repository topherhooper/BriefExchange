/**
 * Created by chooper on 2/16/17.
 */
import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/map';


@Component({
  moduleId: 'dashboard',
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']

})

export class DashboardComponent {
  title = 'app works!';
}
