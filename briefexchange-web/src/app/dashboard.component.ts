/**
 * Created by chooper on 2/16/17.
 */
import {Component, OnInit} from '@angular/core';

import {Proofer} from './proofer';
import {ProoferService} from './proofer.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {
  proofers: Proofer[] = [];

  constructor(private prooferService: ProoferService) {
  }

  ngOnInit(): void {
    this.prooferService.getProofers()
      .then(proofers => this.proofers = proofers.slice(0, 5));
  }
}
