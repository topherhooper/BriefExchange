/**
 * Created by chooper on 2/16/17.
 */
// Keep the Input import for now, we'll remove it later:
import 'rxjs/add/operator/switchMap';
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';

import {ProoferService} from './proofer.service';
import {Proofer} from './proofer';


@Component({
  moduleId: module.id,
  selector: 'my-proofer-detail',
  templateUrl: './proofer-detail.component.html',
  styleUrls: ['./proofer-detail.component.css'],
})
export class ProoferDetailComponent implements OnInit {
  @Input() proofer: Proofer;

  constructor(private prooferService: ProoferService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  save(): void {
    this.prooferService.update(this.proofer)
      .then(() => this.goBack());
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.prooferService.getProofer(+params['id']))
      .subscribe(hero => this.proofer = hero);
  }

  goBack(): void {
    this.location.back();
  }


}
