/**
 * Created by chooper on 2/16/17.
 */
import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Proofer}           from './proofer';

@Injectable()
export class ProoferSearchService {
  constructor(private http: Http) {
  }

  search(term: string): Observable<Proofer[]> {
    return this.http
      .get(`app/proofers/?name=${term}`)
      .map(response => response.json().data as Proofer[]);
  }
}
